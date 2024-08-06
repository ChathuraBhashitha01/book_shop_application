import {Component} from "react";
import {Route, Routes} from "react-router-dom";
import {Home} from "../../page/Home/Home";
import {About} from "../../page/About/About";
import {Contact} from "../../page/Contact/Contact";
import {PlaceOrderForm} from "../../page/PlaseOrder/PlaceOrderForm";
import {ShoppingCart} from "../ShoppingCart/ShoppingCart";
import {ViewAll} from "../ViewAll/ViewAll";

export class MainContent extends Component {
    render() {
        return (
            <div className="overflow-hidden">
                <Routes>
                    <Route path="/" Component={Home}/>
                    <Route path="/about" Component={About}/>
                    <Route path="/contact" Component={Contact}/>
                    <Route path="/view" Component={ViewAll}/>
                    <Route path="/place-order"
                           element={
                               <PlaceOrderForm itemsList={
                                   ShoppingCart.itemsList
                               }/>
                           }
                    />
                </Routes>
            </div>
        );
    }
}