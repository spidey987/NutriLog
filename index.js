//import * as ccView from './Views/ccView';
import { searchPage } from './Views/searchView';

/** Global state of the app
 * Calorie Counter
 * Set Goal
 * Recipe
 */

//const state = {};

// Calorie Counter
document.querySelector('.logo').addEventListener('click', e => {
    searchPage();
    console.log('clicked');
}); 

// Set GoalsetgoalView.renderSetGoal();

// RecipesearchView.renderSearch();