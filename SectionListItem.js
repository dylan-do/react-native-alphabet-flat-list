/**
 * Created by JetBrains WebStorm.
 * Author: yoon
 * Date: 19-1-8
 * Time: 下午4:55
 * Desc: 滚动列表字母项
 */
import React from 'react'
import PropTypes from 'prop-types'
import { View, Text } from 'react-native'

export function SectionListItem({ title, height, style, active = false }) {
  return (
    <View
      style={[
        {
          height,
          width: 20,
          justifyContent: 'center',
          alignItems: 'center'
        },
        style.container
      ]}
    >
      <View
        style={[
          {
            width: 18,
            height: 18,
            borderRadius: 9,
            backgroundColor: active ? '#0ea8ff' : 'transparent',
            justifyContent: 'center',
            alignItems: 'center'
          },
          style.item(active)
        ]}
      >
        <Text
          style={[
            {
              fontSize: 11,
              color: 'white',
              textAlign: 'center',
              fontWeight: 'bold'
            },
            style.text
          ]}
        >
          {title}
        </Text>
      </View>
    </View>
  )
}

SectionListItem.propTypes = {
  title: PropTypes.string,
  height: PropTypes.number,
  active: PropTypes.bool,
  style: PropTypes.object
}

SectionListItem.defaultProps = {
  style: {}
}
