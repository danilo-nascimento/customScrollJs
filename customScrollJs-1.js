function customSidebarScroll(){
    var advSidebar = document.querySelector('.menu-principal');
    var advSidebarHeight = advSidebar.scrollHeight;
    // https://developer.mozilla.org/en-US/docs/Web/API/Window/getComputedStyle
    var advSidebarStyle = window.getComputedStyle( advSidebar );

    // https://developer.mozilla.org/en-US/docs/Web/API/CSSStyleDeclaration/getPropertyValue
    var advSidebarPaddingTop = advSidebarStyle.getPropertyValue('padding-top');
    var advSidebarPaddingBottom = advSidebarStyle.getPropertyValue('padding-bottom');


    var heightWindow = window.innerHeight;

    // https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/match
    var scrollSidebar = (advSidebarHeight + parseInt( advSidebarPaddingTop.match(/\d+/)[0] ) + parseInt( advSidebarPaddingBottom.match(/\d+/)[0]) ) - heightWindow ;
    console.log( Boolean( scrollSidebar ) );
    
    // https://developer.mozilla.org/en-US/docs/Web/Events/wheel
    // https://developer.mozilla.org/en-US/docs/Web/API/GlobalEventHandlers/onscroll
    
}