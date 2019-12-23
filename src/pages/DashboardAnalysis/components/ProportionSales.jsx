import { Card, Radio } from 'antd';
import { FormattedMessage } from 'umi-plugin-react/locale';
import React from 'react';
import { Pie } from './Charts';
import Yuan from '../utils/Yuan';
import styles from '../style.less';

const ProportionSales = ({
  dropdownGroup,
  salesType,
  loading,
  salesPieData,
  handleChangeSalesType,
}) => (
  <Card
    loading={loading}
    className={styles.salesCard}
    bordered={false}
    title={'当月金额类别占比'}
    style={{
      height: '100%',
    }}
    extra={
      <div className={styles.salesCardExtra}>
        {dropdownGroup}
        <div className={styles.salesTypeRadio}>
          <Radio.Group value={salesType} onChange={handleChangeSalesType}>
            <Radio.Button value="all">
              全部
            </Radio.Button>
            <Radio.Button value="online">
              收入
            </Radio.Button>
            <Radio.Button value="stores">
              支出
            </Radio.Button>
          </Radio.Group>
        </div>
      </div>
    }
  >
    <div>
      {/* <h4
        style={{
          marginTop: 8,
          marginBottom: 32,
        }}
      >
        <FormattedMessage id="dashboardanalysis.analysis.sales" defaultMessage="Sales" />
      </h4> */}
      <Pie
        hasLegend
        subTitle={'总额'}
        total={() => <Yuan>{salesPieData.reduce((pre, now) => now.y + pre, 0)}</Yuan>}
        data={salesPieData}
        valueFormat={value => <Yuan>{value}</Yuan>}
        height={400}
        lineWidth={4}
        style={{marginTop:'50px'}}
      />
    </div>
  </Card>
);

export default ProportionSales;
