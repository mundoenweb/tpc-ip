
module.exports.fis = (device) => {
  return {
    header: {
      responseCode: 200,
      responseMessage: 'exito',
      externalId: '12345678',
      transactionId: '123456789',
      transactionDate: new Date().getTime(),
      millis: 123456789
    },
    merchant: {
      merchantId: '1234561',
      merchantName: 'INKAFARMA',
      additionalParams: {
        currencyList: 'string',
        sponsoredMerchantId: 'string',
        sponsoredMerchantName: 'string',
        sponsoredMerchantAddress: 'string',
        sponsoredMerchantPhoneNumber: 'string',
        sponsoredMerchantMCCI: 'string',
        fastPaymentEnabled: 'string',
        installmentsEnabled: 'string'
      }
    },
    device: {
      terminalId: '1902173',
      serialNumber: device.serialNumber,
      fingerPrint: 'string',
      reloadParams: true,
      reloadKeys: device.reloadKeys,
      unattended: true,
      fastPayment: true
    },
    keys: {
      ewkDataHex: 'string',
      ivDataHex: 'string',
      ewkPinHex: 'string',
      ivPinHex: 'string',
      ewkMacSignature: 'string'
    },
    order: {},
    customFields: {}
  }
}
