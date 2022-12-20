import React, { useEffect, useState } from "react";
import VideoCard from "./VideoCard";
import "./RecommendedVideos.css";
import axios from "axios"; // python request type get data
import { DateTime } from "luxon";
import { CircularProgress } from "@mui/material";
import { Alert } from "@mui/material";

const RecommendedVideos = () => {
  const [videoCards, setVideoCards] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [isError, setIsError] = useState(false);

  useEffect(() => {
    axios
      .get(
        `https://www.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&chart=mostPopular&maxResults=10&key=${process.env.REACT_APP_YOUTUBE_API_KEY}`
        `https://www.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&chart=mostPopular&maxResults=10&key=AIzaSyALHgoCvaxRlyPBjXdgTnbUN6St3VfEozo`
      )
      .then((response) => {
        createVideoCards(response.data.items);
        console.log(response);
        
      })
      .catch((error) => {
        console.log(error);
        setIsError(true);
      });
  }, []);

  async function createVideoCards(videoItems) {
    let newVideoCards = [];
    for (const video of videoItems) {
      // console.log("Start");
      const videoId = video.id;
      // console.log(videoId);
      const snippet = video.snippet;
      // console.log(snippet);
      const channelId = snippet.channelId;
      // console.log(channelId);
      const response = await axios.get(
        `https://www.googleapis.com/youtube/v3/channels?part=snippet&id=${channelId}&key=${process.env.REACT_APP_YOUTUBE_API_KEY}`
      );
      // console.log(response);
      const channelImage = response.data.items[0].snippet.thumbnails.medium.url;
      // console.log(channelImage);

      // console.log("End");
      const title = snippet.title;
      const image = snippet.thumbnails.medium.url;
      const views = video.statistics.viewCount;
      const timestamp = DateTime.fromISO(snippet.publishedAt).toRelative();
      const channel = snippet.channelTitle;

      newVideoCards.push({
        videoId,
        image,
        title,
        channel,
        views,
        timestamp,
        channelImage,
      });
    }
    setVideoCards(newVideoCards);
    setIsLoading(false);
  }

  if (isError) {
    return (
      <Alert severity="error" className="loading">
        No Results found!
      </Alert>
    );
  }
  return (
    <div className="recommendedvideos" style={{ height: "100%" }}>
      <div className="loadingcircular">
        {isLoading ? (
          <CircularProgress className="loading" color="error" />
        ) : null}
      </div>
      <div className="recommendedvideos__videos">
        {videoCards.map((item) => {
          return (
            <VideoCard
              key={item.videoId}
              title={item.title}
              image={item.image}
              views={item.views}
              timestamp={item.timestamp}
              channel={item.channel}
              channelImage={item.channelImage}
            />
          );
        })}
      </div>
    </div>
  );
};

export default RecommendedVideos;


// https://www.youtube.com/watch