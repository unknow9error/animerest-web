import { ContactShadows, Html, OrbitControls, useTexture } from '@react-three/drei';
import { Canvas } from '@react-three/fiber';
import { ConfigProvider } from 'antd';
import { FC, PropsWithChildren, useLayoutEffect } from "react";
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import { store } from 'src/store/rootReducer';
import * as THREE from 'three';
import styles from './Background.module.scss';
import ruRU from 'antd/es/locale/ru_RU';

export interface ThreeBackgroundInterface {
    image: string;
}

export const Background = ({ image }: ThreeBackgroundInterface) => {
    const texture = useTexture(image);

    useLayoutEffect(() => {
        texture.encoding = THREE.sRGBEncoding;
        texture.mapping = THREE.EquirectangularReflectionMapping;
    }, []);

    return (
        <primitive attach="background" object={texture} />
    )
}

export const ThreeBackground: FC<PropsWithChildren<ThreeBackgroundInterface>> = ({ image, children }) => {
    return (
        <Canvas
            className={styles.fiberContainer}
            gl={{
                logarithmicDepthBuffer: true,
                antialias: true,
                depth: true,
            }}
            dpr={[1, 1]}
            camera={{
                position: [0, 0, 150],
                fov: 100
            }}
        >
            {children &&
                <Html
                    position={[0, 0, 0]}
                    className={styles.threeBackgroundHtml}
                >
                    <ConfigProvider locale={ruRU}>
                        <BrowserRouter>
                            <Provider store={store}>
                                {children}
                            </Provider>
                        </BrowserRouter>
                    </ConfigProvider>
                </Html>
            }
            <Background image={image} />
            <hemisphereLight intensity={0.5} />
            <ContactShadows resolution={1024} frames={1} position={[0, -1.16, 0]} scale={15} blur={0.5} opacity={1} far={20} key={undefined} onPointerMissed={undefined} quaternion={undefined} attach={undefined} args={undefined} children={undefined} onUpdate={undefined} up={undefined} rotation={undefined} matrix={undefined} layers={undefined} dispose={undefined} clear={undefined} raycast={undefined} onClick={undefined} onContextMenu={undefined} onDoubleClick={undefined} onPointerUp={undefined} onPointerDown={undefined} onPointerOver={undefined} onPointerOut={undefined} onPointerEnter={undefined} onPointerLeave={undefined} onPointerMove={undefined} onPointerCancel={undefined} onWheel={undefined} visible={undefined} type={undefined} isGroup={undefined} id={undefined} uuid={undefined} name={undefined} parent={undefined} modelViewMatrix={undefined} normalMatrix={undefined} matrixWorld={undefined} matrixAutoUpdate={undefined} matrixWorldNeedsUpdate={undefined} castShadow={undefined} receiveShadow={undefined} frustumCulled={undefined} renderOrder={undefined} animations={undefined} userData={undefined} customDepthMaterial={undefined} customDistanceMaterial={undefined} isObject3D={undefined} onBeforeRender={undefined} onAfterRender={undefined} applyMatrix4={undefined} applyQuaternion={undefined} setRotationFromAxisAngle={undefined} setRotationFromEuler={undefined} setRotationFromMatrix={undefined} setRotationFromQuaternion={undefined} rotateOnAxis={undefined} rotateOnWorldAxis={undefined} rotateX={undefined} rotateY={undefined} rotateZ={undefined} translateOnAxis={undefined} translateX={undefined} translateY={undefined} translateZ={undefined} localToWorld={undefined} worldToLocal={undefined} lookAt={undefined} add={undefined} remove={undefined} removeFromParent={undefined} getObjectById={undefined} getObjectByName={undefined} getObjectByProperty={undefined} getWorldPosition={undefined} getWorldQuaternion={undefined} getWorldScale={undefined} getWorldDirection={undefined} traverse={undefined} traverseVisible={undefined} traverseAncestors={undefined} updateMatrix={undefined} updateMatrixWorld={undefined} updateWorldMatrix={undefined} toJSON={undefined} clone={undefined} copy={undefined} addEventListener={undefined} hasEventListener={undefined} removeEventListener={undefined} dispatchEvent={undefined} />
            <OrbitControls
                enablePan={true}
                enableZoom={true}
            />
        </Canvas >
    )
}
