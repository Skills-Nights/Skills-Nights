import React, { useEffect, useState } from "react";
import "./Archives.css";
import ReactPlayer from "react-player/youtube";
import { useSpring, animated } from "react-spring";
import { PacmanLoader } from "react-spinners";

const Archives = () => {
  const [recentsAreLoading, setRecentsAreLoading] = useState(true);
  const [webinarsAreLoading, setWebinarsAreLoading] = useState(true);
  const [recentVideos, setRecentVideos] = useState([]);
  const [webinarVideos, setWebinarVideos] = useState([]);

  const API_KEY = "";
  const channelId = "UCzCSePZZ1IqwvSplOF4K1fQ";
  const playlistId = "PL0rYQ5Uu_kMsJttU8o4aB8vn-B2cM_Ct4";

  const recent_videos_url = `https://www.googleapis.com/youtube/v3/search?key=${API_KEY}&channelId=${channelId}&part=snippet,id&order=date&maxResults=4`;
  const webinars_url = `https://www.googleapis.com/youtube/v3/playlistItems?part=snippet,contentDetails&maxResults=25&playlistId=${playlistId}&key=${API_KEY}&order=date&maxResults=4`;

  const fetchRecent = async () => {
    try {
      const res = await fetch(recent_videos_url);
      const data = await res.json();
      setRecentVideos(data.items);
      setRecentsAreLoading(false);
    } catch (error) {
      setRecentsAreLoading(false);
      console.log(error);
    }
  };

  const fetchWebinars = async () => {
    try {
      const res = await fetch(webinars_url);
      const data = await res.json();
      setWebinarVideos(data.items);
      console.log(data.items)
      setWebinarsAreLoading(false);
    } catch (error) {
      setWebinarVideos(false);
      console.log(error);
    }
  };

  useEffect(() => {
    fetchRecent();
    fetchWebinars();
  }, []);

  const props = useSpring({
    config: { duration: 1500 },
    val1: 2,
    val2: 14,
    val3: 18,
    from: { val1: 0, val2: 0, val3: 0 },
  });

  return (
    <div className="archives-container">
      <div className="archives-content">
        <div className="archive-counts">
          <h1>
            <animated.div>
              {props.val1.interpolate((val1) => Math.floor(val1))}
            </animated.div>
            <br /> <span>Events</span>{" "}
          </h1>
          <h1>
            <animated.div>
              {props.val2.interpolate((val2) => Math.floor(val2))}
            </animated.div>{" "}
            <br /> <span>Mentors</span>{" "}
          </h1>
          <h1>
            <animated.div>
              {props.val3.interpolate((val3) => Math.floor(val3))}
            </animated.div>
            <br /> <span>Webinars</span>{" "}
          </h1>
        </div>
        <div className="recent-events">
          <div className="heading">
            <h1>Recent Events</h1>
          </div>
          <div className="videos">
            {recentVideos.map((video, index) => {
              return (
                <ReactPlayer
                  height="300px"
                  width="350px"
                  key={index}
                  url={`https://www.youtube.com/watch?v=${video.id.videoId}`}
                />
              );
            })}
          </div>
          <div className="more-videos">
            <a
              target="_blank"
              href="https://www.youtube.com/channel/UCzCSePZZ1IqwvSplOF4K1fQ/featured"
            >
              More {">>"}
            </a>
          </div>
        </div>
        <div className="recent-webinars">
          <div className="heading">
            <h1>Recent Webinars</h1>
          </div>
          <div className="videos">
            {webinarVideos.map((video, index) => {
              return (
                <ReactPlayer
                  height="300px"
                  width="350px"
                  key={index}
                  url={`https://www.youtube.com/watch?v=${video.contentDetails.videoId}`}
                />
              );
            })}
          </div>
          <div className="more-videos">
            <a
              target="_blank"
              href="https://youtube.com/playlist?list=PL0rYQ5Uu_kMsJttU8o4aB8vn-B2cM_Ct4"
            >
              More {">>"}
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Archives;
