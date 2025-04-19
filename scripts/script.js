//
        createOrder: function(data, actions) {
            return actions.order.create({
                purchase_units: [{
                    amount: {
                        value: price
                    }
                }]
            });
        },
        onApprove: function(data, actions) {
            return actions.order.capture().then(function(details) {
                alert('Transaction completed by ' + details.payer.name.given_name + '\nREDIRECTING YOU TO YOUR FOLDER...');
                // Redireciona para a URL após o pagamento
                window.location.href = redirectUrl;
            });
        }
    }).render(`#paypal-button-container-${previewNumber}`);
}

// Chamadas para configurar os botões do PayPal para cada vídeo
document.addEventListener('DOMContentLoaded', function () {
    // LIZZY INCEST FOLDER, preço de $25 e link para o redirecionamento
    setupPaypalButton(1, '25.00', 'https://mega.nz/folder/R5YHxIbQ#BZYTwY2eGglQvUhMQQ04kg');

    // Para o segundo vídeo, preço de $35 e link para o redirecionamento
    setupPaypalButton(2, '35.00', 'https://mega.nz/folder/t9BnlDoB#0S4QXZAqi-TNFkJhM8qYOw');

    // Para o terceiro vídeo, preço de $25 e link para o redirecionamento
    setupPaypalButton(3, '25.00', 'https://mega.nz/folder/90JWWDLB#MeYiYEBPEGvUAz0kYR0NPw');

    // Para o quarto vídeo, preço de $35 e link para o redirecionamento
    setupPaypalButton(4, '35.00', 'https://mega.nz/folder/xxIWwapb#iqmneRAsxKsWS21BERgWnA');

    // Para o quinto vídeo, preço de $25 e link para o redirecionamento
    setupPaypalButton(5, '25.00', 'https://mega.nz/folder/585VBa4A#uX6h4sloJTkNenoavI4_zg');

    // Para o sexto vídeo, preço de $30 e link para o redirecionamento
    setupPaypalButton(6, '30.00', 'https://mega.nz/folder/t9BnlDoB#0S4QXZAqi-TNFkJhM8qYOw');

    // Para o sétimo vídeo, preço de $35 e link para o redirecionamento
    setupPaypalButton(7, '35.00', 'https://mega.nz/folder/xxIWwapb#iqmneRAsxKsWS21BERgWnA');

    // Para o oitavo vídeo, preço de $30 e link para o redirecionamento
    setupPaypalButton(8, '30.00', 'https://mega.nz/folder/coZASbyQ#1jvNV95HZHXOMP_L2CwQ4Q');

    // Para o nono vídeo, preço de $30 e link para o redirecionamento
    setupPaypalButton(9, '30.00', 'https://mega.nz/folder/5wY3XLaI#o2HOXnQT7OPiZKDLNzEI5Q');

    // Para o décimo vídeo, preço de $35 e link para o redirecionamento
    setupPaypalButton(10, '35.00', 'https://mega.nz/folder/t9BnlDoB#0S4QXZAqi-TNFkJhM8qYOw');

    // Para o décimo vídeo, preço de $30 e link para o redirecionamento
    setupPaypalButton(11, '30.00', 'https://mega.nz/folder/90JWWDLB#MeYiYEBPEGvUAz0kYR0NPw');

    // Para o décimo vídeo, preço de $40 e link para o redirecionamento
    setupPaypalButton(12, '40.00', 'https://mega.nz/folder/t9BnlDoB#0S4QXZAqi-TNFkJhM8qYOw');

    // Para o décimo vídeo, preço de $45 e link para o redirecionamento
    setupPaypalButton(13, '45.00', 'https://mega.nz/folder/xxIWwapb#iqmneRAsxKsWS21BERgWnA');

    // Para o décimo vídeo, preço de $25 e link para o redirecionamento
    setupPaypalButton(14, '25.00', 'https://mega.nz/folder/pww0HbgD#Ae9i_Hyo_0lmdY_Oc_WxNQ');

    // Para o décimo vídeo, preço de $30 e link para o redirecionamento
    setupPaypalButton(15, '30.00', 'https://mega.nz/folder/5wY3XLaI#o2HOXnQT7OPiZKDLNzEI5Q');

    // Para o décimo vídeo, preço de $65 e link para o redirecionamento
    setupPaypalButton(16, '65.00', 'https://mega.nz/folder/t9BnlDoB#0S4QXZAqi-TNFkJhM8qYOw');

    // Para o décimo vídeo, preço de $35 e link para o redirecionamento
    setupPaypalButton(17, '35.00', 'https://mega.nz/folder/xxIWwapb#iqmneRAsxKsWS21BERgWnA');

    // Para o décimo vídeo, preço de $25 e link para o redirecionamento
    setupPaypalButton(18, '25.00', 'https://mega.nz/folder/Exo3DCxC#gNPPDo_nf4wDfZLJRX-ziw');

    // Para o décimo vídeo, preço de $25 e link para o redirecionamento
    setupPaypalButton(19, '25.00', 'https://mega.nz/folder/585VBa4A#uX6h4sloJTkNenoavI4_zg');

    // Para o décimo vídeo, preço de $150 e link para o redirecionamento
    setupPaypalButton(20, '150.00', 'https://mega.nz/folder/k8QD1LjY#L6xPKx7u0JsPn6tYzhtGzw');
});

