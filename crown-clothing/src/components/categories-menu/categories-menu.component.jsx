import { Component } from "react";
import CategoryItem from "../category-item/category-item.component";
import './categories.style.scss'

class CategoriesMenu extends Component {
    constructor() {
        super();

        const categories = [
        {
            id: 1,
            title: "hats",
            imageUrl: "https://i.ibb.co/cvpntL1/hats.png"
        },
        {
            id: 2,
            title: "jackets",
            imageUrl: "https://i.ibb.co/px2tCc3/jackets.png"
        },
        {
            id: 3,
            title: "sneakers",
            imageUrl: "https://i.ibb.co/0jqHpnp/sneakers.png"
        },
        {
            id: 4,
            title: "womens",
            imageUrl: "https://i.ibb.co/GCCdy8t/womens.png"
        },
        {
            id: 5,
            title: "mens",
            imageUrl: "https://i.ibb.co/R70vBrQ/men.png"
        }
        ]

        this.state = {
            categories: categories,
        }

    };

    render() {
        const {categories} = this.state
        return (
            <div className="categories-container">
                {categories.map((category) => (
                    <CategoryItem key={category.id} category={category} />
                ))}
            </div>
        )
    }

}

export default CategoriesMenu