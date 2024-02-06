// import Video from 'next-video';

export default function VideoBackground() {
    return (
        <video autoPlay={true} muted style={{
            position: "fixed",
            minWidth: "80%",
            minHeight: "80%"
        }}>
            <source src="https://samplelib.com/lib/preview/mp4/sample-5s.mp4" type="video/mp4"/>
        </video>
    );
  }