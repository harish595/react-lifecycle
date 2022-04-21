import React from 'react'
import Mounting from './lifecycle/Mounting'
import MountingJson from './lifecycle/MountingJson';
import Update from "./updating/Updating"
import Avatar from "./updating/Avatar"
import Updating from './updating/Updating';
import Unmount from "./unmounting/Unmount"
import Hero from "./components/Hero"
import "./global.css"
import ErrorBoundries from './components/errorboundries/ErrorBoundary';
import ErrorBoundary from './components/errorboundries/ErrorBoundary';

import LifeCycles from './lifecycle/LifeCycles';
const App = () => {
  return (
    <div>
      {/* for static getderivedfrom props */}
      {/* <Mounting mytrainer="Dixith"/> */}

      {/* componentdidmount */}
      {/* <Mounting /> */}

      {/* fething json api for Mountingjson file */}
      {/* <MountingJson/> */}

      {/* <Avatar/> */}

      {/* 
      updating */}
      {/* <Update/> */}
      {/* <Updating/> */}

      {/* unmounting phase can be called only once */}
      {/* <Unmount /> */}

      {/* errorBoundries */}
      <ErrorBoundary>
        <Hero heroname="Harish" />
      </ErrorBoundary>
      <ErrorBoundary>
        <Hero heroname="joker" />
      </ErrorBoundary>
      <ErrorBoundary>
        <Hero heroname="Gobi Abhi" />
      </ErrorBoundary>
      <ErrorBoundary>
        <Hero heroname="Mille Rajesh" />
      </ErrorBoundary>
      {/* evening practice */}
      {/* life cycles excercise */}

      {/* <LifeCycles myName="Abhi"/> */}

      {/* <LifeCycles/> */}

      {/* life cycle unmount phase */}
      {/* <Unmount/> */}
    </div>
  );
}

export default App