import React, { useState, useEffect } from "react";
import "./YoutubeVideos.css";

const YoutubeVideos = () => {
  const [videos, setVideos] = useState([]);

  useEffect(() => {
    const fetchVideos = async () => {
      const CHANNEL_ID = "UCE_M8A5yxnLfW0KghEeajjw";
      const MAX_RESULTS = 9;
      const url = `https://www.googleapis.com/youtube/v3/search?key=${API_KEY}&channelId=${CHANNEL_ID}&part=snippet,id&order=date&maxResults=${MAX_RESULTS}`;

      try {
        const response = await fetch(url);
        const data = await response.json();
        console.log("Fetched videos:", data.items);
        setVideos(data.items);
      } catch (error) {
        console.error("Error fetching videos:", error);
      }
    };

    fetchVideos();
  }, []);

  return (
    <div className="youtube-videos">
      {videos.map((video) => (
        <div key={video.id.videoId} className="video-card">
          <a
            href={`https://www.youtube.com/watch?v=${video.id.videoId}`}
            target="_blank"
            rel="noopener noreferrer"
          >
            <img
              src={video.snippet.thumbnails.medium.url}
              alt={video.snippet.title}
              className="video-thumbnail"
            />
          </a>
          <h3 className="video-title">{video.snippet.title}</h3>
          <p className="video-description">{video.snippet.description}</p>
          <p className="video-date">
            {new Date(video.snippet.publishedAt).toLocaleDateString()}
          </p>
        </div>
      ))}
    </div>
  );
};

export default YoutubeVideos;
