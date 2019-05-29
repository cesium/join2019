var exampleCallback = function() {
    console.log('Order complete!');
};

window.EBWidgets.createWidget({
    // Required
    widgetType: 'checkout',
    eventId: '62215237450',
    iframeContainerId: 'eventbrite-widget-container-62215237450',

    // Optional
    iframeContainerHeight: 425,  // Widget height in pixels. Defaults to a minimum of 425px if not provided
    onOrderComplete: exampleCallback  // Method called when an order has successfully completed
});