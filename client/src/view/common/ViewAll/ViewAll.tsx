import {Component} from "react";
import axios from 'axios'
import Book from '../Book/Book'

interface ViewProps {
    data: any;
}

export class ViewAll extends Component<ViewProps> {

    private api:any;

    constructor(props:ViewProps) {
        super(props)
        this.api= axios.create({
            baseURL: `http://localhost:4000`
        });

        this.state = {
            data: []
        }
    }

    private category = this.props;

    componentDidMount() {
        this.fetchData();
    }

    fetchData=async ()=>{
        try {
            this.api.get('api/v1/books/find/'+this.category).then((res:{data:any})=>{
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
            <div className="flex flex-wrap ml-[1px] mt-5 mb-5 justify-center items-center mx-auto " >
                {
                    data.map((book: any) => (
                        <Book key={book.code}
                              data={book}/>
                    ))
                }
            </div>
        );
    }
}