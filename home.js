/*retrieving the button using getElement by id
here DOMCONETETLOADED MEANS==> the js script will work only after the html content is being loaded
 */
document.addEventListener('DOMContentLoaded', function(){
    var Focusbutton = document.getElementById('Focusbutton');
})

/*now adding event listener on the button
   queries all tabs in the current window using the Chrome Tabs API. It takes an object with query parameters ({currentWindow: true}) to specify that we want to query tabs only in the current window. The callback function receives an array of tabs as its argument.
   tabs.find => tries to find an active tab from all the tabs

   now implementing foreach loop
   itereates over every tab in the active tabs 

*/
Focusbutton.addEventListener('click', function(){
    chrome.tabs.query({currentWindow: true}, function(tabs) {
        var activeTabId = tabs.find(tab => tab.active).id;

        tabs.forEach(tab => {
            if(tab.id != activeTabId){
                chrome.tabs.remove(tab.id);
            }
            
        });
    })
})