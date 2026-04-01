class Amazon{
    Searchbar:string
    SearchButton:any
    SelectButton:any
    Product4:any
    Quantitybutton:any
    No_of_product:any
    //Add_to_cart:any

    constructor(page) {
        this.Searchbar=page.locator('input#twotabsearchtextbox')
        this.SearchButton=page.locator('input#nav-search-submit-button')
        this.SelectButton=page.locator('//span[text()="10 GB & Above"]//preceding-sibling::div/descendant::i[@class="a-icon a-icon-checkbox"]')
        this.Product4=page.locator('//span[text()="iQOO Neo 10R 5G (Raging Blue, 12GB RAM, 256GB Storage) | Snapdragon 8s Gen 3 Processor | India\'s Slimmest 6400mAh Battery Smartphone | Segment\'s Most Stable 90FPS for 5 Hours"]')
        this.Quantitybutton=page.locator('//span[text()="Quantity:"]')
        this.No_of_product=page.locator('//a[@id="quantity_2"]')
        //this.Add_to_cart=page.locator('(//input[@id="add-to-cart-button" and @title="Add to Shopping Cart"])[1]')
    }

    async addToCart(Searchbar:string){
        await this.Searchbar.fill("Phones")
        await this.SearchButton.click()
        await this.SelectButton.click()
        await this.Product4.click()
        // await this.Quantitybutton.click()
        // await this.No_of_product.click()
        //await this.Add_to_cart.click()
    }
}
export default Amazon