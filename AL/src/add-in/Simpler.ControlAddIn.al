controladdin Simpler
{
    Scripts =
        'src/add-in/scripts/bundle.js';
    StartupScript = 'src/add-in/scripts/start.js';

    Images =
        'src/add-in/images/bundle.js.map';

    RequestedHeight = 400;
    RequestedWidth = 600;
    MaximumHeight = 1200;
    MinimumHeight = 200;

    HorizontalShrink = false;
    HorizontalStretch = true;
    VerticalShrink = true;
    VerticalStretch = true;

    event OnControlReady();

    procedure SendData(Data: JsonArray);
}