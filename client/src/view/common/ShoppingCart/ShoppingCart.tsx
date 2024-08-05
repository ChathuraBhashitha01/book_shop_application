import {Component} from "react";

interface ModifyCartProps {
    data: any
}
interface ModifyCartState {
    itemCount: number
}
export class ShoppingCart extends Component <ModifyCartProps, ModifyCartState>{


    constructor(props: ModifyCartProps) {
        super(props);
        this.state = {
            itemCount: 1
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