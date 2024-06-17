import {Component} from "react";
import icon from "../../../images/pexels-minan1398-694740.jpg"

export class About extends Component {
    render() {
        return (
            <div className="h-[85vh] relative">
                <img src={icon} alt="" className="h-[30vh] w-[100vw] filter brightness-150 opacity-40"/>
                <div className="w-[50%] h-auto absolute top-5 bottom-0 left-0 right-0 mx-auto  pt-5 pl-10 pr-10 border-[1px] border-black">
                    <h2 className="pb-3 text-3xl text-black underline decoration-2">About Us</h2>
                    <p className="pb-3  text-[15px]">
                        Bookshop.org is an online bookshop with a mission to financially support local, independent
                        bookshops.
                        <br/> <br/>
                        We believe that bookshops are essential to a healthy culture. They are where authors can connect
                        with readers, where we discover new writers, where children get hooked on the thrill of reading
                        that can last a lifetime. They are also anchors for our high streets and communities -- owned,
                        staffed, run and full of real people who have a genuine love of books and reading.<br/>
                        As more and more people buy their books online, we wanted to create an easy, convenient way for
                        you to get your books and support independent bookshops at the same time. If you want to choose
                        a specific bookshop to support, choose them from our map and they’ll receive 30% of the cover
                        price (or almost all of the profit) on your orders for a year. Otherwise, 10% of the cover price
                        of your order will contribute to an earnings pool that will be evenly distributed among
                        participating independent bookshops each month. Either way, your order is sent straight to your
                        address, and all in-stock items arrive in 2-3 days.<br/>
                        We also support anyone who advocates for books through our affiliate programme, which pays a 10%
                        commission on every sale, and gives a matching 10% to independent bookshops. If you are an
                        author, a website or magazine, a bookclub, an organisation that wants to recommend books, or
                        even just a book-lover with an Instagram feed, you can sign up to be an affiliate, start your
                        own shop, and be rewarded for your book recommendations.<br/>
                        By design, we give away the vast majority of our profit to bookshops, publications, authors and
                        the many others who make up the thriving, inspirational culture around books and reading.
                        Ultimately, we hope readers visit and enjoy independent bookshops whenever they can and that
                        Bookshop.org makes it easy for readers to support the indies we all love, even when they can’t.
                        Independent bookshops deserve a larger share of the online book-buying market. We hope that
                        Bookshop.org can help strengthen the fragile ecosystem around bookselling and keep local
                        bookshops an integral part of our culture and communities.<br/>
                        Bookshop.org is a B-Corp - a corporation dedicated to the public good.
                        Do you have questions? Read the FAQ or please Contact Us.
                        For UK media enquiries, please contact Anna.Zanetti@midaspr.co.uk.
                    </p>

                </div>
            </div>
        );
    }
}