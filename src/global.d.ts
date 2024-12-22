import type { ReactThreeFiber } from '@react-three/fiber';
import type { Object3D } from 'three';

console.log('global.d.ts loaded');

declare global {
  namespace JSX {
    interface IntrinsicElements {
      primitive: ReactThreeFiber.Object3DNode<Object3D, typeof Object3D>;
    }
  }
}
