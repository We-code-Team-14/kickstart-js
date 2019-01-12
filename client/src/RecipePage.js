import React, { Component } from 'react';
import { render } from 'react-dom';
import { Tabs, Tab, TabPanel, TabList } from 'react-web-tabs';
import { Accordion, AccordionItem } from 'react-light-accordion';
import 'react-light-accordion/demo/css/index.css';

class RecipePage extends Component {

  state = {
    title: '',
    textBody: '',
    tags: ''
  }
  render() {
    return (
        <div>
          <h2>Recipe Listing</h2>
                             <Tabs
      defaultTab="one"
    onChange={(tabId) => { console.log(tabId) }}
  >
  <TabList>
    <Tab tabFor="one">Tomatoes</Tab>
    <Tab tabFor="two">Cabbages</Tab>
    <Tab tabFor="three">Onions</Tab>
    </TabList>
    <TabPanel tabId="one">
        <Accordion atomic={true}>

        <AccordionItem title="GARDEN VEGETABLE PIE">
        <div class="wprm-recipe-ingredients-container"><div class="wprm-recipe-header wprm-color-header">Ingredients</div><div class="wprm-recipe-ingredient-group"><ul class="wprm-recipe-ingredients"><li class="wprm-recipe-ingredient wprm-list-checkbox-container"><span class="wprm-list-checkbox"></span> <span class="wprm-recipe-ingredient-amount">1</span> <span class="wprm-recipe-ingredient-unit">9-inch</span> <span class="wprm-recipe-ingredient-name">deep dish pie shell</span> <span class="wprm-recipe-ingredient-notes">, prebaked</span></li><li class="wprm-recipe-ingredient wprm-list-checkbox-container"><span class="wprm-list-checkbox"></span> <span class="wprm-recipe-ingredient-amount">3</span> <span class="wprm-recipe-ingredient-name">tomatoes</span> <span class="wprm-recipe-ingredient-notes">, peeled and sliced (Roma work best)</span></li><li class="wprm-recipe-ingredient wprm-list-checkbox-container"><span class="wprm-list-checkbox"></span> <span class="wprm-recipe-ingredient-amount">1</span> <span class="wprm-recipe-ingredient-unit">small</span> <span class="wprm-recipe-ingredient-name">zucchini</span> <span class="wprm-recipe-ingredient-notes">, sliced into rings</span></li><li class="wprm-recipe-ingredient wprm-list-checkbox-container"><span class="wprm-list-checkbox"></span> <span class="wprm-recipe-ingredient-amount">1</span> <span class="wprm-recipe-ingredient-unit">small</span> <span class="wprm-recipe-ingredient-name">yellow squash</span> <span class="wprm-recipe-ingredient-notes">, sliced into rings</span></li><li class="wprm-recipe-ingredient wprm-list-checkbox-container"><span class="wprm-list-checkbox"></span> <span class="wprm-recipe-ingredient-amount">1/2</span> <span class="wprm-recipe-ingredient-unit">cup</span> <span class="wprm-recipe-ingredient-name">sweet onion</span> <span class="wprm-recipe-ingredient-notes">(or red onion), sliced</span></li><li class="wprm-recipe-ingredient wprm-list-checkbox-container"><span class="wprm-list-checkbox"></span> <span class="wprm-recipe-ingredient-amount">10</span> <span class="wprm-recipe-ingredient-name">fresh basil leaves</span> <span class="wprm-recipe-ingredient-notes">, chopped</span></li><li class="wprm-recipe-ingredient wprm-list-checkbox-container"><span class="wprm-list-checkbox"></span> <span class="wprm-recipe-ingredient-amount">1</span> <span class="wprm-recipe-ingredient-unit">cup</span> <span class="wprm-recipe-ingredient-name">shredded mozzarella cheese</span></li><li class="wprm-recipe-ingredient wprm-list-checkbox-container"><span class="wprm-list-checkbox"></span> <span class="wprm-recipe-ingredient-amount">1</span> <span class="wprm-recipe-ingredient-unit">cup</span> <span class="wprm-recipe-ingredient-name">freshly shredded cheddar cheese</span></li><li class="wprm-recipe-ingredient wprm-list-checkbox-container"><span class="wprm-list-checkbox"></span> <span class="wprm-recipe-ingredient-amount">3/4</span> <span class="wprm-recipe-ingredient-unit">cup</span> <span class="wprm-recipe-ingredient-name">mayonnaise</span> <span class="wprm-recipe-ingredient-notes">(or half mayo, half Greek yogurt)</span></li><li class="wprm-recipe-ingredient wprm-list-checkbox-container"><span class="wprm-list-checkbox"></span> <span class="wprm-recipe-ingredient-amount">2</span> <span class="wprm-recipe-ingredient-unit">Tablespoons</span> <span class="wprm-recipe-ingredient-name">freshly grated parmesan cheese</span></li><li class="wprm-recipe-ingredient wprm-list-checkbox-container"><span class="wprm-list-checkbox"></span> <span class="wprm-recipe-ingredient-name">salt and freshly ground black pepper</span></li></ul></div></div>
    <div class="wprm-recipe-instructions-container"><div class="wprm-recipe-header wprm-color-header">Instructions</div><div class="wprm-recipe-instruction-group"><ol class="wprm-recipe-instructions"><li class="wprm-recipe-instruction"><div class="wprm-recipe-instruction-text">Preheat oven to 350 degrees F.</div></li><li class="wprm-recipe-instruction"><div class="wprm-recipe-instruction-text"><p>Place the tomatoes in a colander in the sink in 1 layer.&nbsp;</p></div></li><li class="wprm-recipe-instruction"><div class="wprm-recipe-instruction-text"><p>Sprinkle with salt and allow to drain for 10 minutes.&nbsp;</p></div></li><li class="wprm-recipe-instruction"><div class="wprm-recipe-instruction-text"><p>Use a paper towel to pat-dry the tomatoes and make sure most of the excess juice is out. (You don't want wet (juicy) tomatoes or your pie will turn out soggy).</p></div></li><li class="wprm-recipe-instruction"><div class="wprm-recipe-instruction-text"><p>Heat a large skillet over medium-high heat. Season zucchini and squash with salt and pepper. .&nbsp;</p></div></li><li class="wprm-recipe-instruction"><div class="wprm-recipe-instruction-text"><p>Saute the squash in a single layer for 2-3 minutes on each side or until golden brown. Remove to a paper towel</p></div></li><li class="wprm-recipe-instruction"><div class="wprm-recipe-instruction-text"><p>Layer the tomato slices, zucchini, squash, and onion on the bottom of the pie shell. Sprinkle basil on top.&nbsp;</p></div></li><li class="wprm-recipe-instruction"><div class="wprm-recipe-instruction-text"><p>Combine the grated cheeses and mayonnaise together.&nbsp;</p></div></li><li class="wprm-recipe-instruction"><div class="wprm-recipe-instruction-text"><p>Smooth cheese mixture over the top and sprinkle parmesan cheese on top.&nbsp;</p></div></li><li class="wprm-recipe-instruction"><div class="wprm-recipe-instruction-text"><p>Bake for about 30 minutes or until lightly browned. Allow to cool for at least 10 minutes.</p></div></li><li class="wprm-recipe-instruction"><div class="wprm-recipe-instruction-text">To serve, cut into slices and serve warm.</div></li></ol></div></div>
        </AccordionItem>

        <AccordionItem title="OVEN-FRIED GREEN TOMATOES">
        <p>Ingredients</p>
        <div class="ingredients"><ul>
        <li class="ingredient" itemprop="ingredients">6 green tomatoes, sliced about 1/2 inch thick</li>
    <li class="ingredient" itemprop="ingredients">3/4 cup Honeyville Blanched Almond Flour (If you only have almond meal, I would buzz in food processor to make it finer)</li>
    <li class="ingredient" itemprop="ingredients">2 tsp. Old Bay Lemon and Herb Seasoning (or any spicy seasoning mix; use more or less to taste)</li>
    <li class="ingredient" itemprop="ingredients">2 eggs, beaten well</li>
    <li class="ingredient" itemprop="ingredients">1/2 cup Ranch Dressing (I confess I love the Ranch mix in a package that you mix with buttermilk)</li>
    <li class="ingredient" itemprop="ingredients">1-2 tsp. Sriracha Rooster Sauce (start with 1 tsp. and taste to see if you want it more spicy)</li>
    </ul>
    </div>
        <p>Instructions</p>
    <div class="instructions" itemprop="recipeInstructions"><ol>
        <li>Preheat oven or toaster oven to 350F/180C.&nbsp; Spray a baking sheet with non-stick spray.</li>
    <li>Cut the tomatoes into slices about 1/2 inch thick.&nbsp; (We used the flat inner pieces and discarded the ends of the tomatoes with rounded edges.)&nbsp; Beat the eggs in a small bowl.&nbsp; In another bowl, mix the almond flour and Old Bay Seasoning.&nbsp; Remove and save half of the almond flour mixture, so you can work with two batches.</li>
    <li>One at a time, dip both sides of each tomato slice into the egg and then into the almond flour mixture, using the fork or your fingers to press the almond mixture on to the tomato slice so it sticks.&nbsp; Place each tomato on the baking sheet after it’s coated with the almond flour mixture.&nbsp; (Don’t worry if they aren’t completely perfect; just work on getting each one coated with almond flour as much as you can.)</li>
    <li>Bake tomatoes 35-40 minutes, turning carefully once.&nbsp; While the tomatoes bake, mix together the ranch dressing and Sriracha sauce to make the dipping sauce.&nbsp; The baked tomatoes are done when the almond mixture is lightly browned on each side and tomatoes are cooked through.&nbsp; Serve hot.</li>
    <li>I saved some of these to see how they would hold up to a night in the refrigerator. I reheated them about 15 minutes in a preheated toaster oven set on 450F/230C. Although they were best freshly made, I thought the reheated ones were surprisingly good.</li>
    </ol>
    </div>
        </AccordionItem>

        </Accordion>
    </TabPanel>
    <TabPanel tabId="two">
        <Accordion atomic={true}>

        <AccordionItem title="ROASTED CABBAGE WEDGES">
        <p>Ingredients</p>
        <ul>
        <li>cabbage</li>
        <li>olive oil</li>
    <li>salt</li>
    <li>pepper</li>
    <li>onion-dijon sauce</li>
    <li>optional garlic-infused olive oil</li>
    </ul>
        <p>Instructions</p>
    <ol>
    <li>It’s easiest to deal with them if you leave the core intact on the wedges and let people cut it out when they’re eating it. Most other recipes will tell you to core them – don’t do it! The leaves stay together much better with the core, making it a breeze to turn when roasting.</li>
    <li>Don’t try to make the wedges too small. Cut a medium head in half and then cut each half into quarters (or use just one half, depending on how many you’re serving). It’s easy to cut the cooked wedges in half at the table if needed, but the bigger wedges hold together better and cook more evenly.</li>
    <li>They are perfectly good with regular olive oil, salt, and pepper, but if you have a bottle of garlic-infused olive oil (I like Trader Joe’s – it’s only $3.99) it takes it to a whole other, wonderful level. Garlic olive oil has quickly become a staple in our house.</li>
    </ol>
        </AccordionItem>

        <AccordionItem title="CHICKEN CABBAGE SAUTE">
        <p>Ingredients</p>
        <ul>
        <li>3 tbsp olive oil</li>
    <li>1/2 lb boneless chicken thighs, cut into small pieces</li>
    <li>1 small cabbage</li>
    <li>2 medium carrots (shredded)</li>
    <li>1 tbsp paprika</li>
    <li>2 tomatoes</li>
    <li>3 bay leaves</li>
    <li>1 cup chicken stock</li>
    <li>salt, pepper</li>
    <li>chopped fresh parsley to garnish</li>
    </ul>
        <p>Instructions</p>
    <ol>
    <li>Warm up a large saute pan on medium-high heat. Add olive oil and chicken. Fry for 5-7 minutes or until browned.</li>
    <li>Meanwhile, slice the cabbage into thin strips, just like you would for coleslaw.</li>
                                                                               <li>Add cabbage and paprika to the chicken. Stir, and saute for another five to ten minutes.</li>
    <li>Puree the tomato in a small food chopper or food processor.</li>
    <li>Add tomato, chicken stock, carrots and bay leaves. Season with some salt and pepper. Stir everything together. Reduce heat to low, and cover with a tight lid.</li>
    <li>Cook stirring occasionally for about 45 minutes, until there is no liquid remaining.</li>
    <li>Garnish with fresh parsley.</li>
    </ol>
        </AccordionItem>

        </Accordion>

        </TabPanel>
    <TabPanel tabId="three">
        <p>Tab 3 content</p>
    </TabPanel>
    </Tabs>
        </div>
  )
  }
}

const DummyContent = () => (
    <p style={{ padding: '18px' }}>
Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
    tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
    quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse
cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat
non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
</p>
);

export default RecipePage;