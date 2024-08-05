import {Component} from "react";
import {CartItem} from "../../../model/CartItem";

interface ShoppingCartProps {
    data: any
}
interface ShoppingCartState {
    itemCount: number
}
export class ShoppingCart extends Component <ShoppingCartProps, ShoppingCartState>{
    public static itemsList:CartItem[] = [];

    constructor(props: ShoppingCartProps) {
        super(props);
        this.state = {
            itemCount: 1
        }
    }

    componentDidMount() {
        const {itemCount} = this.state;

        if (this.props.data.isAdded) {
            if (!ShoppingCart.itemsList.find(item=>item.book.code ===this.props.data.product.id)) {
                ShoppingCart.itemsList.push(
                    {
                        book: this.props.data.product,
                        itemCount: itemCount
                    }
                );
                console.log(ShoppingCart.itemsList);
            }
        }
    }

    componentDidUpdate(prevProps: Readonly<ShoppingCartProps>, prevState: Readonly<ShoppingCartState>, snapshot?: any) {
        let {itemCount}= this.state;
        let item= ShoppingCart.itemsList.find(item =>item.book.code ===this.props.data.product.id);
        if (item) {
            let index =ShoppingCart.itemsList.indexOf(item);
            ShoppingCart.itemsList.splice(index, 1);
            ShoppingCart.itemsList.push({
                    book: this.props.data.product,
                    itemCount: itemCount
            });

            console.log(ShoppingCart.itemsList);
        }
    }

    render() {
        let {itemCount} = this.state;

        const increaseItemCount = () => {
                this.setState({
                    itemCount: ++itemCount
                })
            }

        const decreaseItemCount = () => {

                if (itemCount > 0) {
                    this.setState({
                        itemCount: --itemCount
                    })
                } else {
                    alert('Item count ' +
                        'can\'t be less than 1' );
                }
            }
        return (
            <div className="w-full  mt-1 p-[2.4px] text-[8px] text-center">
                <button className="float-left  text-[8px] bg-yellow-300 rounded-lg h-3 w-4" onClick={decreaseItemCount}>-</button>
                <small className="text-[10px]">{itemCount}</small>
                <button className="float-right text-[8px] bg-yellow-300 rounded-lg h-3 w-4" onClick={increaseItemCount}>+ </button>
            </div>
        );
    }
}