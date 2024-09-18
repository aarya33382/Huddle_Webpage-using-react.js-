import logo from './logo.svg';
import './App.css';
import First from './components/First';
import Reuse from './components/reuse';
import FirstImg from "C:\\vs_reactClones\\figma_demo\\src\\images\\Reuse\\first.png"
import SecondImg from "C:\\vs_reactClones\\figma_demo\\src\\images\\Reuse\\second.png"
import ThirdImg from 'C:\\vs_reactClones\\figma_demo\\src\\images\\Reuse\\third.png'
import Footer from './components/footer';
function App() {
  let detailArray=[
    {tilte:'Grow Together',desc:'We will make you grow with us. They make good use of us and leave us in dust and move forward. that is the reason why i don\'t believe in anyone ',
      image:FirstImg,
      cls:'main'
    },
    {tilte:'Flowing Conversation',desc:'Conversation with other people may increase our speaking skills but we should get influenced by anyone. Remain unique then u will have the value u deserve',
      image:SecondImg,
      cls:'main-reverse'
    },
    {tilte:'Your Users',desc:'Our users are the people who should make the difference .Finally we all hope to get good users that is all we all strive to achieve at the end',
      image:ThirdImg,
      cls:'main'
    }
  ]

  return (
   <>
   <First />
   <Reuse  arr={detailArray}/>
   <Footer/>
   </>
  );
}

export default App;
