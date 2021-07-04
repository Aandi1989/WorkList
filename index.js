// storesList styles start
(function storesList () {
    const storesListForm = document.querySelector('.stores-list__form');
    const storesListIconTop = document.querySelector('.stores-list__icon-top');
    const storesListIconStick = document.querySelector('.stores-list__icon-stick');
    const storesListList = document.querySelector('.stores-list__list');
    const storesListIconBottom = document.querySelector('.stores-list__icon-bottom');
    const storesList = document.querySelector('.stores-list');
    storesListIconTop.addEventListener('click', ()=> {
        storesListForm.classList.add('store-list__form--js');
        storesListList.classList.add('stores-list__list--js');
        storesListIconBottom.classList.add('stores-list__icon-bottom--js');
        storesListIconStick.classList.add('stores-list__icon-stick--js');
        storesListIconTop.classList.add('stores-list__icon-stick--js')
    });
    storesListIconBottom.addEventListener('click',()=>{
        storesListForm.classList.remove('store-list__form--js');
        storesListList.classList.remove('stores-list__list--js');
        storesListIconBottom.classList.remove('stores-list__icon-bottom--js');
        storesListIconStick.classList.remove('stores-list__icon-stick--js');
        storesListIconTop.classList.remove('stores-list__icon-stick--js')
    });

    storesList.onscroll = function () {
        const currentScrollPos = storesList.scrollTop;
        updateStoresList(currentScrollPos > 1)
    };

    const updateStoresList = collapse => {
        if (collapse) {
            storesListForm.classList.add('store-list__form--js');
            storesListList.classList.add('stores-list__list--js');
            storesListIconBottom.classList.add('stores-list__icon-bottom--js');
            storesListIconStick.classList.add('stores-list__icon-stick--js');
            storesListIconTop.classList.add('stores-list__icon-stick--js')
        } else {
            storesListForm.classList.remove('store-list__form--js');
            storesListList.classList.remove('stores-list__list--js');
            storesListIconBottom.classList.remove('stores-list__icon-bottom--js');
            storesListIconStick.classList.remove('stores-list__icon-stick--js');
            storesListIconTop.classList.remove('stores-list__icon-stick--js')
        }
    }
}());
// storesList styles end


// storeDetails styles start
(function storeDetails(){
    const storeDetailsIconTop=document.querySelector('.store-details__icon-top');
    const storeDetailsInfo=document.querySelector('.store-details__info');
    const storeDetailsStats=document.querySelector('.store-details__stats');
    const storeDetailsHeader=document.querySelector('.store-details__header');
    const storeDetailsProductsTitle=document.querySelector('.store-details__products-title');
    const storeDetailsIconBottom=document.querySelector('.store-details__icon-bottom');
    const storeDetailsIconStick=document.querySelector('.store-details__icon-stick');
    const storeDetailsProducts=document.querySelector('.store-details__products');
    const storeDetails=document.querySelector('.store-details');
    const storeDetailsProductsSubtitles=document.querySelector('[name="storeDetailsProductsSubtitles"]');
    storeDetailsIconTop.addEventListener('click',()=>{
        storeDetailsInfo.classList.add('store-details__info--js');
        storeDetailsStats.classList.add('store-details__stats--js');
        storeDetailsHeader.classList.add('store-details__header--js');
        storeDetailsProductsTitle.classList.add('store-details__products-title--js');
        storeDetailsIconBottom.classList.add('store-details__icon-bottom--js');
        storeDetailsIconStick.classList.add('store-details__icon-stick--js');
        storeDetailsIconTop.classList.add('store-details__icon-top--js');
        storeDetailsProducts.classList.add('store-details__products--js');
        // storeDetailsProductsSubtitles.classList.add('store-details__products-subtitles--js');
    });
    storeDetailsIconBottom.addEventListener('click',()=>{
        storeDetailsInfo.classList.remove('store-details__info--js');
        storeDetailsStats.classList.remove('store-details__stats--js');
        storeDetailsHeader.classList.remove('store-details__header--js');
        storeDetailsProductsTitle.classList.remove('store-details__products-title--js');
        storeDetailsIconBottom.classList.remove('store-details__icon-bottom--js');
        storeDetailsIconStick.classList.remove('store-details__icon-stick--js');
        storeDetailsIconTop.classList.remove('store-details__icon-top--js');
        storeDetailsProducts.classList.remove('store-details__products--js');
        // storeDetailsProductsSubtitles.classList.remove('store-details__products-subtitles--js');
    });

    storeDetails.onscroll = function () {
        const currentScrollPos = storeDetails.scrollTop;
        updateStoreDetails(currentScrollPos > 1)
    };

    const updateStoreDetails = collapse => {
        if (collapse) {
            storeDetailsInfo.classList.add('store-details__info--js');
            storeDetailsStats.classList.add('store-details__stats--js');
            storeDetailsHeader.classList.add('store-details__header--js');
            storeDetailsProductsTitle.classList.add('store-details__products-title--js');
            storeDetailsIconBottom.classList.add('store-details__icon-bottom--js');
            storeDetailsIconStick.classList.add('store-details__icon-stick--js');
            storeDetailsIconTop.classList.add('store-details__icon-top--js');
            storeDetailsProducts.classList.add('store-details__products--js');
        } else {
            storeDetailsInfo.classList.remove('store-details__info--js');
            storeDetailsStats.classList.remove('store-details__stats--js');
            storeDetailsHeader.classList.remove('store-details__header--js');
            storeDetailsProductsTitle.classList.remove('store-details__products-title--js');
            storeDetailsIconBottom.classList.remove('store-details__icon-bottom--js');
            storeDetailsIconStick.classList.remove('store-details__icon-stick--js');
            storeDetailsIconTop.classList.remove('store-details__icon-top--js');
            storeDetailsProducts.classList.remove('store-details__products--js');
        }
    }
}());
// storeDetails styles end

const store={
    name:"alex",
    "surname":"novik"
}
console.log(store['name'])
console.log(store['surname'])
