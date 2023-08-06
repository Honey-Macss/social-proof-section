import './App.css';

import FirstSection from './Components/MainContents/FirstSection';
import SecondSection from './Components/MainContents/SecondSection';

function App() {
  return (
    <div className=" h-[100svh] sm:h-[fit-content] pt-[8rem] pl-[10rem] xxxl:pl-[8rem] pr-[10rem] xxxl:pr-[5rem] xxl:pr-[3rem] xxl:pl-[6rem] sm:p-[5rem_1.5rem_3rem_1.5rem] sm3:px-[1rem]">
      <FirstSection />
      <SecondSection />
    </div>
  );
}

export default App;
