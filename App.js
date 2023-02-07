
import ReactDOM from "react-dom/client";


// const Title = (
//     <h1 id="title" key="h1">
//         Learning React Course
//     </h1>
// )

const Logo = () => (
    <div>
        <img src="https://seeklogo.com/images/S/sheraton-hotels-logo-E23D7401AF-seeklogo.com.png" width="100px" />
    </div>
)
const SearchBar = () => (
    <div>
        <input type="tex" name="search" id="search" />
    </div>
)

const UserIcon = () => (
    <div>
        <img src="https://static.vecteezy.com/system/resources/thumbnails/000/439/863/small/Basic_Ui__28186_29.jpg" width="100px" />
    </div>
)
//Componenets in react
//Functional based ocponents:
//Class based componenets 
//{Title}
const HeaderComponent = () => {
    return (
        <div>
            <Logo />
            <SearchBar />
            <UserIcon />
        </div>
    )
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<HeaderComponent />);