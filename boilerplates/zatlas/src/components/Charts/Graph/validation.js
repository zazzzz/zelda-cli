/**
 * @Author: mark
 * @Date:   2017-04-26T11:29:27+08:00
 * @Email:  mark_z1988@icloud.com
 * @Filename: validation.js
 * @Last modified by:   mark
 * @Last modified time: 2017-08-02T14:20:44+08:00
 * @License: MIT
 */

 module.exports = [
   {
     name: 'title',
     key: 'title',
     uiType: 'group',
     valueType: 'group',
     expand: false,
     children: [
       {
         key: 'show',
         name: 'show',
         uiType: 'toggle',
         value: true,
         valueType: 'boolean',
       },
       {
         name: 'text',
         key: 'text',
         uiType: 'input',
         valueType: 'string',
         value: '图',
       },
       {
         name: 'color',
         uiType: 'color',
         key: 'color',
         valueType: 'color',
         value: '#000',
       },
       {
         name: 'left',
         key: 'left',
         uiType: 'input',
         valueType: 'string',
         value: '20px',
       },
       {
         name: 'textAlign',
         key: 'textAlign',
         uiType: 'input',
         valueType: 'string',
         value: 'left',
       },
     ],
   },
   {
     key: 'width',
     name: 'width',
     uiType: 'slider',
     value: 100,
     valueType: 'integer',
     validate: {
       range: {
         min: 0,
         max: 100,
       },
     },
   },
   {
     key: 'height',
     name: 'height',
     uiType: 'slider',
     value: 100,
     valueType: 'integer',
     validate: {
       range: {
         min: 0,
         max: 100,
       },
     },
   },
   {
     key: 'multiSelectionMode',
     name: 'multiSelectionMode',
     uiType: 'toggle',
     value: false,
     valueType: 'boolean',
   },
   {
     name: 'labelColor',
     uiType: 'color',
     key: 'labelColor',
     valueType: 'color',
     value: '#000',
   },
   {
     name: 'hoverLabelColor',
     uiType: 'color',
     key: 'hoverLabelColor',
     valueType: 'color',
     value: '#000',
   },
   {
     key: 'showCommunityPolygon',
     name: 'showCommunityPolygon',
     uiType: 'toggle',
     value: false,
     valueType: 'boolean',
   },
   {
     key: 'directGraph',
     name: 'directGraph',
     uiType: 'toggle',
     value: false,
     valueType: 'boolean',
   },
   {
     name: 'layout',
     key: 'layout',
     value: 'default',
     uiType: 'switch',
     valueType: 'string',
     validate: {
       options: {
         default: [],
         random: [],
         forceLink: [],
         forceAtlas2: [
           {
             key: 'startAlgorithms',
             name: 'startAlgorithms',
             uiType: 'toggle',
             value: true,
             valueType: 'boolean',
           },
           {
             key: 'adjustSizes',
             name: 'adjustSizes',
             uiType: 'toggle',
             value: false,
             valueType: 'boolean',
           },
           {
             key: 'barnesHutOptimize',
             name: 'barnesHutOptimize',
             uiType: 'toggle',
             value: false,
             valueType: 'boolean',
           },
           {
             name: 'barnesHutTheta',
             key: 'barnesHutTheta',
             uiType: 'input',
             valueType: 'float',
             value: 0.5,
           },
           {
             name: 'edgeWeightInfluence',
             key: 'edgeWeightInfluence',
             uiType: 'input',
             valueType: 'float',
             value: 0,
           },
           {
             name: 'gravity',
             key: 'gravity',
             uiType: 'input',
             valueType: 'float',
             value: 1,
           },
           {
             name: 'iterationsPerRender',
             key: 'iterationsPerRender',
             uiType: 'input',
             valueType: 'float',
             value: 1,
           },
           {
             key: 'linLogMode',
             name: 'linLogMode',
             uiType: 'toggle',
             value: true,
             valueType: 'boolean',
           },
           {
             key: 'strongGravityMode',
             name: 'strongGravityMode',
             uiType: 'toggle',
             value: false,
             valueType: 'boolean',
           },
           {
             key: 'outboundAttractionDistribution',
             name: 'outboundAttractionDistribution',
             uiType: 'toggle',
             value: false,
             valueType: 'boolean',
           },
           {
             name: 'scalingRatio',
             key: 'scalingRatio',
             uiType: 'input',
             valueType: 'float',
             value: 1,
           },
           {
             name: 'slowDown',
             key: 'slowDown',
             uiType: 'input',
             valueType: 'float',
             value: 1,
           },
           {
             name: 'startingIterations',
             key: 'startingIterations',
             uiType: 'input',
             valueType: 'integer',
             value: 1,
           },

         ],
         fruchtermanReingold: [
           {
             name: 'area',
             key: 'area',
             uiType: 'input',
             valueType: 'integer',
             value: 2000,
           },
           {
             key: 'autoArea',
             name: 'autoArea',
             uiType: 'toggle',
             value: true,
             valueType: 'boolean',
           },
           {
             name: 'gravity',
             key: 'gravity',
             uiType: 'input',
             valueType: 'float',
             value: 1,
           },
           {
             name: 'iterations',
             key: 'iterations',
             uiType: 'input',
             valueType: 'integer',
             value: 200,
           },
           {
             name: 'speed',
             key: 'speed',
             uiType: 'input',
             valueType: 'float',
             value: 0.1,
           },

         ],
         dagre: [],
       },
     },
   },
   {
     name: 'allEdgesColor',
     key: 'allEdgesColor',
     uiType: 'group',
     valueType: 'group',
     expand: false,
     children: [
       {
         key: 'customColor',
         name: 'customColor',
         uiType: 'toggle',
         value: false,
         valueType: 'boolean',
       },
       {
         name: 'edgesColor',
         uiType: 'color',
         key: 'edgesColor',
         valueType: 'color',
         value: '#ccc',
         validate: {},
       },
     ],
   },
   {
     name: 'allEdgesSize',
     key: 'allEdgesSize',
     uiType: 'group',
     valueType: 'group',
     expand: false,
     children: [
       {
         key: 'customSize',
         name: 'customSize',
         uiType: 'toggle',
         value: false,
         valueType: 'boolean',
       },
       {
         name: 'size',
         key: 'size',
         uiType: 'group',
         valueType: 'group',
         expand: false,
         children: [
           {
             name: 'edgesSize',
             uiType: 'input',
             key: 'edgesSize',
             value: 5,
           },
         ],
       },
     ],
   },
   {
     name: 'allNodeColor',
     key: 'allNodeColor',
     uiType: 'group',
     valueType: 'group',
     expand: false,
     children: [
       {
         key: 'customColor',
         name: 'customColor',
         uiType: 'toggle',
         value: false,
         valueType: 'boolean',
       },
       {
         name: 'communityColor',
         key: 'communityColor',
         uiType: 'group',
         valueType: 'group',
         expand: false,
         children: [
           {
             key: 'active',
             name: 'active',
             uiType: 'toggle',
             value: false,
             valueType: 'boolean',
           },
           {
             name: 'colorPool',
             key: 'colorPool',
             uiType: 'colorArray',
             valueType: 'color[]',
             expand: false,
             value: ['#0091EA', '#A13FC3', '#98C2CF', '#6FB3F1', '#4CBFCF', '#61D6B1', '#A0E896', '#E7F59B', '#D3C24B', '#536572'],
             validate: {},
           },
         ],
       },
       {
         name: 'color',
         key: 'color',
         uiType: 'group',
         valueType: 'group',
         expand: false,
         children: [
           {
             key: 'globalColor',
             name: 'globalColor',
             uiType: 'toggle',
             value: true,
             valueType: 'boolean',
           },
           {
             name: 'nodesColor',
             uiType: 'color',
             key: 'nodesColor',
             valueType: 'color',
             value: '#666666',
             validate: {},
           },
           {
             name: 'gradientColor',
             key: 'gradientColor',
             uiType: 'group',
             valueType: 'group',
             expand: false,
             children: [
               {
                 name: 'nodesLowColor',
                 uiType: 'color',
                 key: 'nodesLowColor',
                 valueType: 'color',
                 value: '#EEEEEE',
                 validate: {},
               },
               {
                 name: 'nodesHighColor',
                 uiType: 'color',
                 key: 'nodesHighColor',
                 valueType: 'color',
                 value: '#0000FF',
                 validate: {},
               },
               {
                 key: 'algorithms',
                 name: 'algorithms',
                 uiType: 'select',
                 value: { name: 'default', value: 'default' },
                 validate: {
                   options: [
                     { name: 'default', value: 'default' },
                     { name: 'degree', value: 'degree' },
                     { name: 'closeness', value: 'closeness' },
                     { name: 'betweennes', value: 'betweennes' },
                     { name: 'pagerank', value: 'pagerank' },
                   ],
                 },
               },
             ],
           },
         ],
       },
     ],
   },
   {
     name: 'allNodeSize',
     key: 'allNodeSize',
     uiType: 'group',
     valueType: 'group',
     expand: false,
     children: [
       {
         key: 'customSize',
         name: 'customSize',
         uiType: 'toggle',
         value: false,
         valueType: 'boolean',
       },
       {
         name: 'size',
         key: 'size',
         uiType: 'group',
         valueType: 'group',
         expand: false,
         children: [
           {
             key: 'globalSize',
             name: 'globalSize',
             uiType: 'toggle',
             value: true,
             valueType: 'boolean',
           },
           {
             name: 'nodesSize',
             uiType: 'input',
             key: 'nodesSize',
             value: 8,
           },
           {
             key: 'algorithms',
             name: 'algorithms',
             uiType: 'select',
             value: { name: 'default', value: 'default' },
             validate: {
               options: [
                 { name: 'default', value: 'default' },
                 { name: 'degree', value: 'degree' },
                 { name: 'closeness', value: 'closeness' },
                 { name: 'betweennes', value: 'betweennes' },
                 { name: 'pagerank', value: 'pagerank' },
               ],
             },
           },
         ],
       },
     ],
   },
 ];
