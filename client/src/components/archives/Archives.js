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

  const API_KEY = process.env.REACT_APP_YOUTUBE_APIKEY;
  const channelId = "UCzCSePZZ1IqwvSplOF4K1fQ";
  const playlistId = "PL0rYQ5Uu_kMsJttU8o4aB8vn-B2cM_Ct4";

  const recent_videos_url = `https://www.googleapis.com/youtube/v3/search?key=${API_KEY}&channelId=${channelId}&part=snippet,id&order=date&maxResults=4`;
  const webinars_url = `https://www.googleapis.com/youtube/v3/playlistItems?part=snippet,contentDetails&maxResults=25&playlistId=${playlistId}&key=${API_KEY}&order=date&maxResults=4`;

  const fetchRecent = async () => {
    try {
      const res = await fetch(recent_videos_url);
      const data = await res.json();
      if (data.items) {
        setRecentVideos(data.items);
        setRecentsAreLoading(false);
      } else {
        // in case quota ended, show old data
        const oldData = {
          items: [
            {
              id: {
                videoId: "ldQASZ3Oj58",
              },
            },
            {
              id: {
                videoId: "VfvNLbclyJc",
              },
            },
            {
              id: {
                videoId: "gIZgYH3bgtA",
              },
            },
            {
              id: {
                videoId: "OhBDWfWZQFg",
              },
            },
          ],
        };
        setRecentVideos(oldData.items);
        setRecentsAreLoading(false);
      }
    } catch (error) {
      setRecentsAreLoading(false);
      console.log(error);
    }
  };

  const fetchWebinars = async () => {
    try {
      const res = await fetch(webinars_url);
      let data = await res.json();
      // console.log(data)
      if (data.items) {
        setWebinarVideos(data.items);
        setWebinarsAreLoading(false);
      } else {
        // in case quota ended, show old data
        const oldData = {
          items: [
            {
              contentDetails: {
                videoId: "mthkYf9IiNM",
              },
            },
            {
              contentDetails: {
                videoId: "GvQYTkBxf-A",
              },
            },
            {
              contentDetails: {
                videoId: "4jp_Zin9EZY",
              },
            },
            {
              contentDetails: {
                videoId: "jC3yoj3VqmM",
              },
            },
          ],
        };

        setWebinarVideos(oldData.items);
        setWebinarsAreLoading(false);
      }
    } catch (error) {
      setWebinarsAreLoading(false);
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
    val2: 10,
    val3: 6,
    from: { val1: 0, val2: 0, val3: 0 },
  });

  return (
    <div id="archives" className="archives-container">
      <div className="archives-content">
        <div className="archive-counts">
          <h1>
            <animated.div>
              {props.val1.interpolate((val1) => Math.floor(val1))}
            </animated.div>
            <span>Events</span>{" "}
          </h1>
          <h1>
            <animated.div>
              {props.val2.interpolate((val2) => Math.floor(val2))}
            </animated.div>{" "}
            <span>Mentors</span>{" "}
          </h1>
          <h1>
            <animated.div>
              {props.val3.interpolate((val3) => Math.floor(val3))}
            </animated.div>
            <span>Webinars</span>{" "}
          </h1>
        </div>
        <div className="recent-events">
          <div className="heading">
            <h1>Recent Events</h1>
          </div>
          <div data-aos="zoom-out" className="videos">
            {recentsAreLoading ? (
              <PacmanLoader color="white"></PacmanLoader>
            ) : (
              recentVideos.map((video, index) => {
                return (
                  <ReactPlayer
                    controls={true}
                    height="300px"
                    width="315px"
                    key={index}
                    url={`https://www.youtube.com/watch?v=${video.id.videoId}`}
                  />
                );
              })
            )}
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
          <div data-aos="fade-down" className="videos">
            {webinarsAreLoading ? (
              <PacmanLoader color="white"></PacmanLoader>
            ) : (
              webinarVideos.map((video, index) => {
                return (
                  <ReactPlayer
                    controls={true}
                    height="300px"
                    width="315px"
                    key={index}
                    url={`https://www.youtube.com/watch?v=${video.contentDetails.videoId}`}
                  />
                );
              })
            )}
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
