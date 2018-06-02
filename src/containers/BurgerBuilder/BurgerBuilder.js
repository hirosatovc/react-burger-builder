import React from 'react';
import Auxiliary from '../../hoc/Auxiliary';
import Burger from '../../components/Burger/Burger';
import BurgerIngredient from '../../components/Burger/BurgerIngredient/BurgerIngredient';

class BurgerBuilder extends React.Component {
    render() {
        return (
            <Auxiliary>
                <div>Burger
                    <Burger>
                        <BurgerIngredient type='bread-top'/>
                        <BurgerIngredient type='salad'/>
                        <BurgerIngredient type='bacon'/>
                        <BurgerIngredient type='meat'/>
                        <BurgerIngredient type='bread-bottom'/>
                    </Burger>
                </div>
                <div>Build Controls</div>
            </Auxiliary>
        );
    }
}

export default BurgerBuilder;