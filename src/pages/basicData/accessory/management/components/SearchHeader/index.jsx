import React, { Component } from 'react';
import { Input, Button, Select } from 'antd';
import styles from './index.less';
import { PlusOutlined } from '@ant-design/icons';

export default class SearchHeader extends Component {
  constructor(props) {
    super(props);
    this.state = {
      key: null,
    };
  }

  onInputChange = (e) => {
    this.setState({
      key: e.target.value,
    });
  };

  render() {
    const { key } = this.state;
    const { onAdd, onQuery } = this.props;
    return (
      <div className={styles.searchHeaderContainer}>
        <div className={styles.searchItem} style={{ marginLeft: '10px' }}>
          <div className={styles.searchTitle}>关键词:</div>
          <Input
            value={key}
            className={styles.searchSelect}
            showsearch="true"
            placeholder="请输入"
            onPressEnter={() => onQuery(key)}
            onChange={this.onInputChange}
          ></Input>
        </div>
        <div className={styles.searchButtonItem}>
          <Button type="primary" className={styles.searchButton} onClick={() => onQuery(key)}>
            查询
          </Button>
          <Button type="primary" icon={<PlusOutlined />} onClick={onAdd}>
            新建
          </Button>
        </div>
      </div>
    );
  }
}
