import {Component} from "react";
import axios from "axios";
import Book from "../Book/Book";

interface ViewProps {
    data: any;
}

export class View extends Component<ViewProps> {
    private api:any;

    constructor(props:ViewProps) {
        super(props)
        this.api= axios.create({
            baseURL: `http://localhost:4000`
        });

        this.state = {
            data: [],
        }
    }

    private category = this.props;

    componentDidMount() {
        this.fetchData();
    }

    fetchData=async ()=>{
        try {
            this.api.get('api/v1/books/findByCategory/'+this.category).then((res:{data:any})=>{
                const jsonData=res.data;
                this.setState({data: jsonData});
            });

        }catch (error){
            console.error('Error:', error);
        }
    }

    render() {
        // @ts-ignore
        const {data} = this.state;
        return (
            <div className="w-[100%] h-auto bg-[#f9edee] relative" >
                <div className="flex flex-row gap-4 w-[75%] h-auto absolute  bottom-6 left-0 right-0 mx-auto ">
                    {
                        data.map((book: any) => (
                            <Book key={book.code}
                                  data={book}/>
                        ))
                    }
                </div>
            </div>
        );
    }
}