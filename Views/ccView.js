export const renderCalCou = () => {
    const markup = `
        <div class="v70_0">
            <div class="v70_1">
                <div class="v70_2"></div>
                <div class="v70_3"></div><span class="v70_4">Click the '+' button to add food & ingredients to your
                    meal!</span><span class="v70_5">Create your own meal and track 3x faster</span><span class="v70_6">Add
                    food & ingredients</span>
                <div class="v70_7">
                    <div class="v70_8"></div><span class="v70_9">Enter the meal name</span>
                </div>
                <div class="v70_10"></div>
                <div class="v70_11"></div><span class="v70_12">NutriLog</span>
                <div class="v70_13">
                    <div class="v70_14"></div>
                </div><span class="v70_15">CALORIE COUNT</span><span class="v70_16">SET GOALS</span><span
                    class="v70_17">RECIPE</span>
                <div class="v70_18">
                    <div class="v70_19"></div>
                    <div class="v70_20"></div>
                </div>
                <div class="v70_21">
                    <div class="v70_22">
                        <div class="v70_23"></div>
                    </div><span class="v70_24">SAVE</span>
                </div>
            </div>
        </div>
    `;
    document.querySelector('main').insertAdjacentHTML('afterbegin', markup);
}
