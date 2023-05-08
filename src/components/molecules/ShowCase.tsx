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
      transformCursor({ type: CursorType.Video, title: ["PAUSE"] });
      setPlay(true);
    } else {
      video.pause();
      transformCursor({ type: CursorType.Video, title: ["PLAY"] });
      setPlay(false);
    }
  };
  return (
    <div className="relative m-auto my-36 w-full overflow-hidden">
      <div className="max-w-6xl">{rotateTitle}</div>
      <div className="my-5 text-lg font-bold">{videoTitle}</div>
      <video
        ref={videoRef}
        muted
        autoPlay
        loop
        // webkit-playsinline
        // x5-playsinline
        disableRemotePlayback
        preload="auto"
        className="z-[-1] w-full cursor-none"
        onMouseEnter={() =>
          transformCursor({
            type: CursorType.Video,
            title: play ? ["PAUSE"] : ["PLAY"],
          })
        }
        onMouseMove={() =>
          transformCursor({
            type: CursorType.Video,
            title: play ? ["PAUSE"] : ["PLAY"],
          })
        }
        onMouseLeave={() => transformCursor({ type: CursorType.Default })}
        onClick={videoPlay}
      >
        <source src={video} type="video/mp4" />
        <p>Your browser doesn't support HTML5 video.</p>
      </video>

      <div className="max-w-6xl pt-5">
        <TitleParagraphComponent
          title={subTitle}
          layout={layout}
          paragraph={paragraph}
        ></TitleParagraphComponent>
      </div>
    </div>
  );
}
