import { useContext, useRef, useState } from "react";
import { CursorContext } from "../../App";
import TitleParagraphComponent, {
  ParagraphPosition,
} from "../atoms/TitleParagraphComponent";
import useMultiLineRotate from "../hooks/useMuliLineRotate";
import { CursorType } from "../hooks/useCursorAnimation";

type showCaseProps = {
  title: string[];
  subTitle: string[];
  paragraph: string[];
  layout: ParagraphPosition;
  video: string;
  videoTitle: string;
};

export default function ShowCase({
  title,
  subTitle,
  paragraph,
  layout,
  video,
  videoTitle,
}: showCaseProps) {
  const { rotateTitle } = useMultiLineRotate(title);
  const transformCursor = useContext(CursorContext);
  const [play, setPlay] = useState(true);
  const videoRef = useRef<HTMLVideoElement>(null);
  const videoPlay = () => {
    const video = videoRef.current;
    if (!video) return;
    if (video.paused) {
      video.play();
      transformCursor(CursorType.Video, "PAUSE");
      setPlay(true);
    } else {
      video.pause();
      transformCursor(CursorType.Video, "PLAY");
      setPlay(false);
    }
  };
  return (
    <div className="relative m-auto my-36 w-full overflow-hidden">
      <div className="max-w-6xl px-10">{rotateTitle}</div>
      <div className="m-5 mx-10 text-lg font-bold">{videoTitle}</div>
      <video
        ref={videoRef}
        muted
        autoPlay
        loop
        webkit-playsinline
        x5-playsinline
        disableRemotePlayback
        preload="auto"
        className="z-[-1] w-full cursor-none"
        onMouseEnter={() =>
          transformCursor(CursorType.Video, play ? "PAUSE" : "PLAY")
        }
        onMouseLeave={() => transformCursor(CursorType.Default)}
        onClick={videoPlay}
      >
        <source src={video} type="video/mp4" />
        <p>Your browser doesn't support HTML5 video.</p>
      </video>

      <div className="max-w-6xl px-10 pt-5">
        <TitleParagraphComponent
          title={subTitle}
          classes={layout}
          paragraph={paragraph}
        ></TitleParagraphComponent>
      </div>
    </div>
  );
}
