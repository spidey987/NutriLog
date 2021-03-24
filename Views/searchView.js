export const searchPage = () => {
    const markup = `
    <main>
        <div class="search">
            <div class="search-bar">
                <div class="search-text">Search for food</div>
                <div class="search-icon"></div>
            </div>
            <div class="result">Search Results</div>
            <div class="search-result">
                <div class="title">Apple</div>
                <div class="calories">90 Cal +</div>
            </div>
            <div class="search-result">
                <div class="title">Egg</div>
                <div class="calories">50 Cal +</div>
            </div>
            <div class="search-result">
                <div class="title">Boiled Egg</div>
                <div class="calories">50 Cal +</div>
            </div>
            <div class="search-result">
                <div class="title">Bread</div>
                <div class="calories">25 Cal +</div>
            </div>
            <div class="search-result">
                <div class="title">Rice</div>
                <div class="calories">200 Cal +</div>
            </div>
            <div class="search-result">
                <div class="title">Milk</div>
                <div class="calories">120 Cal +</div>
            </div>
            <div class="search-result">
                <div class="title">Mango</div>
                <div class="calories">80 Cal +</div>
            </div>
            <div class="search-result">
                <div class="title">Roti</div>
                <div class="calories">105 Cal +</div>
            </div>
        </div>
    </main>
    `;
    document.querySelector('main').insertAdjacentHTML('afterbegin', markup);
}