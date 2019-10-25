import React from 'react'
import PropTypes from 'prop-types'
import Helmet from 'react-helmet'
import { StaticQuery, graphql } from 'gatsby'
import { Link, injectIntl, FormattedMessage as Msg } from "gatsby-plugin-intl";

const keywordList = {
  zh: '比原链,Bytom,比原,BTM,区块链,Blockchain,Bystack,Vapor,Tensority,长铗,朗豫,比原链官网',
  en: '比原链,Bytom,比原,BTM,区块链,Blockchain,Bystack,Vapor,Tensority,长铗,朗豫,比原链官网',
};
const descriptionList = {
  zh: '比原链Bytom是一种多元比特资产的区块链开源交互协议，运行在比原链上的不同类型资产可以通过交互协议进行交换、对赌和基于智能合约的复杂性交互操作。比原链的愿景是利用区块链技术创造多样资产与可编程经济。',
  en: 'a digital asset layer protocol is the infrastructure of asset internet.',
};

function SEO({ description, lang, meta, keywords, title, intl, home = false }) {
  return (
    <StaticQuery
      query={detailsQuery}
      render={data => {
        const metaDescription =
          description || data.site.siteMetadata.description
        return (
          <Helmet
            htmlAttributes={{
              lang,
            }}
            title={(typeof title === 'string' ? title : title[intl.locale]) + (!home ? (intl.locale === 'zh' ? '- 比原链' : '- Bytom Blockchain') : '')}
            titleTemplate={`%s`}
            
            meta={[
              {
                name: `description`,
                content: description || descriptionList[intl.locale],
              },
            ]
              .concat(
                keywords.length > 0
                  ? {
                      name: `keywords`,
                      content: keywords.join(`, `),
                    }
                  : {
                    name: `keywords`,
                    content: keywordList[intl.locale],
                  }
              )
              .concat(meta)}
          >
            {
              ['zh', 'en'].map(locale => {
                return <link rel="alternate" href={`https://bytom.io/${locale}`} hrefLang={locale} key={locale}/>
              })
            }
          </Helmet>
        )
      }}
    />
  )
}

SEO.defaultProps = {
  lang: `en`,
  meta: [],
  keywords: [],
}

SEO.propTypes = {
  description: PropTypes.string,
  lang: PropTypes.string,
  meta: PropTypes.array,
  keywords: PropTypes.arrayOf(PropTypes.string),
  title: PropTypes.object,
}

export default injectIntl(SEO);

const detailsQuery = graphql`
  query DefaultSEOQuery {
    site {
      siteMetadata {
        title
        description
        author
      }
    }
  }
`
