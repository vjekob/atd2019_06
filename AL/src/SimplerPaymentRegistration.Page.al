page 50100 "Simpler Payment Registration"
{
    Caption = 'Simpler Payment Registration';
    PageType = Worksheet;
    ApplicationArea = All;
    UsageCategory = Tasks;

    layout
    {
        area(Content)
        {
            usercontrol(Simpler; Simpler)
            {
                trigger OnControlReady();
                begin
                    SimplerPaymentRegistration.Initialize(CurrPage.Simpler);
                end;
            }
        }
    }

    actions
    {
        area(Processing)
        {
            action(Process)
            {
                Caption = 'Post Payments';
                Image = PostedPayment;
                Promoted = true;
                PromotedCategory = Process;

                trigger OnAction();
                begin
                    // Nothing, this is just a control add-in demo 😎
                end;
            }
        }
    }

    var
        SimplerPaymentRegistration: Codeunit "Simpler Payment Registration";

    trigger OnOpenPage();
    begin
        BindSubscription(SimplerPaymentRegistration);
    end;

    trigger OnClosePage();
    begin
        UnbindSubscription(SimplerPaymentRegistration);
    end;
}
