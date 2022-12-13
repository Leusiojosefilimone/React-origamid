import Home from "./pages/Home";
import Products from "./pages/Products";
import Header from "./pages/Header";



function App() {
  let Pages;
  const {pathname} = window.location;
  console.log(pathname)
  if (pathname == '/'){
    Pages = Home
  }else{
    Pages = Products
  }
  
    return (
    <div>
      <Header/>
      <Pages/>
    </div>)
}



   

export default App;
