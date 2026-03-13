///// Day 12----> assessment
///// Day 13----> Power skill

//span[contains(@class,"a-size-base-plus a-color-base")]   ----->>> Contains method
//span[text()="womens"]  ---->>>> giving 0 by 0
//span[contains(text(),"Womens ")]    ----->>> now it is giving 1 of 6
//span[contains(text(),"Wed")]

//span[@aria-hidden="true"]/child :: span[@class="a-price-whole" and .="4,995"]   ----->>> using child method
//div[@id="form"]/child::div/child::input[@id="username"]                  
//div[@id="form"]/descendant::input[@id="username"]                               ---->>> using descendant

//div[@id="form"]/descendant::input[@id="username"]/preceding-sibling::label      ----->>> for previous sibling
//div[@id="form"]/descendant::input[@id="username"]/preceding-sibling::label/following-sibling::input    ---->>> For next sibling(following)

//input[@id="username"]/parent::div/parent::div    -----> using parent(for direct parent)
//input[@id="username"]/../..                      
//input[@id="username"]/ancestor::div[@id="form"]   -----> using ancestor

//*[name()="svg"]     ------>>>>> For some special tags like path,svg