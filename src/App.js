import {React, useState} from 'react';
  
function App() {

  return (
    <div className="App">
       <a-scene
            vr-mode-ui="enabled: false;"
            loading-screen="enabled: false;"
            arjs="trackingMethod: best; sourceType: webcam; debugUIEnabled: true; initializeOnLoad: true;"
            id="scene"
            embedded
            gesture-detector
        >
            <a-marker
                id="animated-marker"
                type="pattern"
                preset="custom"
                url="/assets/marker.patt"
                raycaster="objects: .clickable"
                emitevents="true"
                cursor="fuse: false; rayOrigin: mouse;"
            >
                <a-image
                    src="/assets/asset.jpeg"
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
