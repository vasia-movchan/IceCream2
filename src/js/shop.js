var food_lines_number = 1;
var food_lines_vis_number = 1;
 var all_food_prices = [1.45, 6.50, 12.30, 2.45, 6.65, 7.15, 2.35, 3.80, 4.67];
 var all_food_type = [];
 var all_food_quantity = [];


 var pokupki_block = document.getElementById('pokupki1');
 
 var food_selectors = pokupki_block.getElementsByClassName('food-selector');
 var food_quantities = pokupki_block.getElementsByClassName('food-quantity');
 var food_closes = pokupki_block.getElementsByClassName('food-close');

 var food_amounts = pokupki_block.getElementsByClassName('food-amount');
var add_button1 = document.getElementById('add-button');
 
var price_str = new Intl.NumberFormat("us-US",
                        { style: "currency", currency: "USD",
                          minimumFractionDigits: 2 });



 function fill_food_line(food_line_num) {
    var price1, sum1;



    var food_type_cur = pokupki_block.querySelector('.food-selector[food-line="' + food_line_num + '"]');
    all_food_type[food_line_num-1] = food_type_cur.selectedIndex;
         
    var food_price_cur = pokupki_block.querySelector('.food-price[food-line="' + food_line_num + '"]');
    food_price_cur.textContent = price_str.format(all_food_prices[food_type_cur.selectedIndex]);
     
    var food_quantity_cur = pokupki_block.querySelector('.food-quantity[food-line="' + food_line_num + '"]');
    all_food_quantity[food_line_num-1] = food_quantity_cur.value;
     
    var food_amount_cur = pokupki_block.querySelector('.food-amount[food-line="' + food_line_num + '"]');
     
    food_amount_cur.textContent = price_str.format(all_food_prices[food_type_cur.selectedIndex] * all_food_quantity[food_line_num-1]);

    var total_food_amount = 0.0;

    for(i=0; i<food_lines_number; i++) {
        total_food_amount += all_food_prices[all_food_type[i]] * all_food_quantity[i];
    }
   
    var total_food_amount_div = document.querySelector('.food-total-amount');
    total_food_amount_div.textContent = price_str.format(total_food_amount);
 }


function changeOption(event) {
     fill_food_line(this.getAttribute('food-line'));
 }

function delOption(event) {

    
    event.preventDefault();
    if (food_lines_vis_number > 1) {
        food_lines_vis_number--;
        var del_item = pokupki_block.querySelector('.products-to-choose-in[food-line="' + this.getAttribute('food-line') + '"]');
        all_food_quantity[this.getAttribute('food-line') - 1] = 0;
        del_item.remove();

        var total_food_amount = 0.0;

        for (i = 0; i < food_lines_number; i++) {
            total_food_amount += all_food_prices[all_food_type[i]] * all_food_quantity[i];
        }
   
        var total_food_amount_div = document.querySelector('.food-total-amount');
        total_food_amount_div.textContent = price_str.format(total_food_amount);
    } 
 }


 function addOption(event){
    var pokupki_list = document.getElementById('add-button-div');
    var elem1 = document.getElementById('food_line_template');

        
    event.preventDefault();
    
     food_lines_number++;
     food_lines_vis_number++; 
  
    let divLast1 = elem1.cloneNode(true);
    pokupki_list.before(divLast1); 
    
    divLast1.setAttribute("food-line", food_lines_number);
     
    var elem2 = divLast1.querySelector('.food-selector');
     elem2.setAttribute("food-line", food_lines_number);
          
    var elem3 = divLast1.querySelector('.food-price');
    elem3.setAttribute("food-line", food_lines_number);

    var elem4 = divLast1.querySelector('.food-quantity');
    elem4.setAttribute("food-line", food_lines_number);

    var elem5 = divLast1.querySelector('.food-amount');
    elem5.setAttribute("food-line", food_lines_number);

    var elem6 = divLast1.querySelector('.food-close');
    elem6.setAttribute("food-line", food_lines_number);


    elem2.selectedIndex = 0;
    elem4.value = 0;
    
    all_food_type.push(0);
    all_food_quantity.push(0);
     
    fill_food_line(food_lines_number);

    elem2.addEventListener("change", changeOption);
    elem4.addEventListener("change", changeOption);
    elem6.addEventListener("click", delOption);
 }
 
 all_food_type.push(0);
 all_food_quantity.push(0);
 
 food_selectors[0].selectedIndex = 0;
 food_quantities[0].value = 0;

 fill_food_line(1);

 for(i=0; i<food_selectors.length; i++) {
    food_selectors[i].addEventListener("change", changeOption);
 }

 for(i=0; i<food_quantities.length; i++) {
    food_quantities[i].addEventListener("change", changeOption);
 }

  for(i=0; i<food_closes.length; i++) {
    food_closes[i].addEventListener("click", delOption);
 }

 add_button1.addEventListener("click", addOption);