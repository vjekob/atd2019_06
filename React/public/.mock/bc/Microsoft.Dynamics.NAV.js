const Microsoft = {
    Dynamics: {
        NAV: {
            InvokeExtensibilityMethod: (method, args) => {
                switch (method) {
                    case "OnControlReady":
                        CurrPage.Simpler.SendData(SEND_DATA);
                        break;
                }
            }
        }
    }
}