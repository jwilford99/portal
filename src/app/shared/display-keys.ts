export class Keys {
  static bill: Keys = {key: 'bill', value: 'Spend', type: 'currency'};
  static billRoas: Keys = {key: 'billRoas', value: 'ROAS', type: 'percent'};
  static campaignName: Keys = {key: 'campaignName', value: 'Campaign'};
  static channel: Keys = {key: 'channel', value: 'Channel'};
  static channelName: Keys = {key: 'channelName', value: 'Service'};
  static clicks: Keys = {key: 'clicks', value: 'Clicks', type: 'number'};
  static conversionsAll: Keys = {key: 'conversionsAll', value: 'Total Site Conversions', type: 'number'};
  static conversionsEffective: Keys = {key: 'conversionsEffective', value: 'GM Conversions', type: 'number'};
  static cpcBill: Keys = {key: 'cpcBill', value: 'CPC', type: 'currency'};
  static cpmBill: Keys = {key: 'cpmBill', value: 'CPM', type: 'currency'};
  static ctr: Keys = {key: 'ctr', value: 'CTR', type: 'percent'};
  static pixelDescription: Keys = {key: 'pixelDescription', value: 'Conversion Type'};
  static pixelId: Keys = {key: 'pixelId', value: 'Id', type: 'number'};
  static impressions: Keys = {key: 'impressions', value: 'Impressions', type: 'number'};
  static interactionName: Keys = {key: 'interactionName', value: 'Interaction Type'};
  static interactionRatio: Keys = {key: 'interactionRatio', value: '% of GM Conversions', type: 'percent'};
  static revenueAssumed: Keys = {key: 'revenueAssumed', value: 'Total GM Assumed', type: 'currency'};
  static revenueTransacted: Keys = {key: 'revenueTransacted', value: 'Total GM Transacted', type: 'currency'};
  static serviceName: Keys = {key: 'serviceName', value: 'Service'};


  static ALL: Keys[] = [
    Keys.bill,
    Keys.billRoas,
    Keys.campaignName,
    Keys.channel,
    Keys.channelName,
    Keys.clicks,
    Keys.conversionsAll,
    Keys.conversionsEffective,
    Keys.cpcBill,
    Keys.cpmBill,
    Keys.ctr,
    Keys.impressions,
    Keys.interactionName,
    Keys.interactionRatio,
    Keys.pixelDescription,
    Keys.pixelId,
    Keys.revenueAssumed,
    Keys.revenueTransacted,
    Keys.serviceName,
  ];

  public key: string = '';
  public value: string = '';
  public type?: string = '';


  static lookup(key: string): Keys {
    let matched = Keys.ALL.filter((k) => k.key.toLowerCase() === key.toLowerCase());
    return matched[0];
  }
}
