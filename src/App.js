import {React, useState} from 'react';
// import {Marker} from "../public/assets/market.patt";
// import {Asset} from "../public/assets/asset.jpeg";

function App() {

  return (
    <div className="App">
       <a-scene
            vr-mode-ui="enabled: false;"
            loading-screen="enabled: false;"
            arjs="trackingMethod: best; sourceType: webcam; debugUIEnabled: true;"
            id="scene"
            embedded
            gesture-detector
        >
            <a-marker
                id="animated-marker"
                type="pattern"
                preset="custom"
                url="/react-ar/public/assets/marker_v2.patt"
                raycaster="objects: .clickable"
                emitevents="true"
                cursor="fuse: false; rayOrigin: mouse;"
            >
                <a-image
                    src="/react-ar/public/assets/dog.jpeg"
                    scale="1 1 1"
                    class="clickable"
                    rotation="-90 0 0"
                    gesture-handler
                ></a-image>
            </a-marker>

            <a-entity camera></a-entity>
        </a-scene>
    </div>
  );
}

export default App;
