"use strict";(self.webpackChunkdocs_website=self.webpackChunkdocs_website||[]).push([[652],{4137:function(t,e,n){n.d(e,{Zo:function(){return c},kt:function(){return m}});var a=n(7294);function r(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function i(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);e&&(a=a.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,a)}return n}function l(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?i(Object(n),!0).forEach((function(e){r(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function o(t,e){if(null==t)return{};var n,a,r=function(t,e){if(null==t)return{};var n,a,r={},i=Object.keys(t);for(a=0;a<i.length;a++)n=i[a],e.indexOf(n)>=0||(r[n]=t[n]);return r}(t,e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(t);for(a=0;a<i.length;a++)n=i[a],e.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(t,n)&&(r[n]=t[n])}return r}var s=a.createContext({}),d=function(t){var e=a.useContext(s),n=e;return t&&(n="function"==typeof t?t(e):l(l({},e),t)),n},c=function(t){var e=d(t.components);return a.createElement(s.Provider,{value:e},t.children)},p={inlineCode:"code",wrapper:function(t){var e=t.children;return a.createElement(a.Fragment,{},e)}},u=a.forwardRef((function(t,e){var n=t.components,r=t.mdxType,i=t.originalType,s=t.parentName,c=o(t,["components","mdxType","originalType","parentName"]),u=d(n),m=r,k=u["".concat(s,".").concat(m)]||u[m]||p[m]||i;return n?a.createElement(k,l(l({ref:e},c),{},{components:n})):a.createElement(k,l({ref:e},c))}));function m(t,e){var n=arguments,r=e&&e.mdxType;if("string"==typeof t||r){var i=n.length,l=new Array(i);l[0]=u;var o={};for(var s in e)hasOwnProperty.call(e,s)&&(o[s]=e[s]);o.originalType=t,o.mdxType="string"==typeof t?t:r,l[1]=o;for(var d=2;d<i;d++)l[d]=n[d];return a.createElement.apply(null,l)}return a.createElement.apply(null,n)}u.displayName="MDXCreateElement"},7475:function(t,e,n){n.r(e),n.d(e,{frontMatter:function(){return o},contentTitle:function(){return s},metadata:function(){return d},toc:function(){return c},default:function(){return u}});var a=n(7462),r=n(3366),i=(n(7294),n(4137)),l=["components"],o={title:"Kafka Metadata",sidebar_label:"Kafka Metadata",slug:"/metadata-ingestion/source_docs/kafka",custom_edit_url:"https://github.com/linkedin/datahub/blob/master/metadata-ingestion/source_docs/kafka.md"},s="Kafka Metadata",d={unversionedId:"metadata-ingestion/source_docs/kafka",id:"metadata-ingestion/source_docs/kafka",isDocsHomePage:!1,title:"Kafka Metadata",description:"For context on getting started with ingestion, check out our metadata ingestion guide.",source:"@site/genDocs/metadata-ingestion/source_docs/kafka.md",sourceDirName:"metadata-ingestion/source_docs",slug:"/metadata-ingestion/source_docs/kafka",permalink:"/docs/metadata-ingestion/source_docs/kafka",editUrl:"https://github.com/linkedin/datahub/blob/master/metadata-ingestion/source_docs/kafka.md",tags:[],version:"current",frontMatter:{title:"Kafka Metadata",sidebar_label:"Kafka Metadata",slug:"/metadata-ingestion/source_docs/kafka",custom_edit_url:"https://github.com/linkedin/datahub/blob/master/metadata-ingestion/source_docs/kafka.md"},sidebar:"overviewSidebar",previous:{title:"Kafka Connect",permalink:"/docs/metadata-ingestion/source_docs/kafka-connect"},next:{title:"LDAP",permalink:"/docs/metadata-ingestion/source_docs/ldap"}},c=[{value:"Setup",id:"setup",children:[],level:2},{value:"Capabilities",id:"capabilities",children:[],level:2},{value:"Quickstart recipe",id:"quickstart-recipe",children:[{value:"Connecting to Confluent Cloud",id:"connecting-to-confluent-cloud",children:[],level:3}],level:2},{value:"Config details",id:"config-details",children:[],level:2},{value:"Compatibility",id:"compatibility",children:[],level:2},{value:"Questions",id:"questions",children:[],level:2}],p={toc:c};function u(t){var e=t.components,n=(0,r.Z)(t,l);return(0,i.kt)("wrapper",(0,a.Z)({},p,n,{components:e,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"kafka-metadata"},"Kafka Metadata"),(0,i.kt)("p",null,"For context on getting started with ingestion, check out our ",(0,i.kt)("a",{parentName:"p",href:"/docs/metadata-ingestion"},"metadata ingestion guide"),"."),(0,i.kt)("h2",{id:"setup"},"Setup"),(0,i.kt)("p",null,"To install this plugin, run ",(0,i.kt)("inlineCode",{parentName:"p"},"pip install 'acryl-datahub[kafka]'"),"."),(0,i.kt)("h2",{id:"capabilities"},"Capabilities"),(0,i.kt)("p",null,"This plugin extracts the following:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Topics from the Kafka broker"),(0,i.kt)("li",{parentName:"ul"},"Schemas associated with each topic from the schema registry")),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:null},"Capability"),(0,i.kt)("th",{parentName:"tr",align:null},"Status"),(0,i.kt)("th",{parentName:"tr",align:null},"Details"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"Platform Instance"),(0,i.kt)("td",{parentName:"tr",align:null},"\u2714\ufe0f"),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("a",{parentName:"td",href:"/docs/platform-instances"},"link"))),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"Data Domains"),(0,i.kt)("td",{parentName:"tr",align:null},"\u2714\ufe0f"),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("a",{parentName:"td",href:"/docs/domains"},"link"))),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"Stateful Ingestion"),(0,i.kt)("td",{parentName:"tr",align:null},"\u2714\ufe0f"),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("a",{parentName:"td",href:"/docs/metadata-ingestion/source_docs/stateful_ingestion"},"link"))))),(0,i.kt)("p",null,"Stateful Ingestion is available only when a Platform Instance is assigned to this source."),(0,i.kt)("h2",{id:"quickstart-recipe"},"Quickstart recipe"),(0,i.kt)("p",null,"Check out the following recipe to get started with ingestion! See ",(0,i.kt)("a",{parentName:"p",href:"#config-details"},"below")," for full configuration options."),(0,i.kt)("p",null,"For general pointers on writing and running a recipe, see our ",(0,i.kt)("a",{parentName:"p",href:"/docs/metadata-ingestion#recipes"},"main recipe guide"),"."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-yml"},'source:\n  type: "kafka"\n  config:\n    # Coordinates\n    connection:\n      bootstrap: "broker:9092"\n\n      schema_registry_url: http://localhost:8081\n\nsink:\n  # sink configs\n')),(0,i.kt)("h3",{id:"connecting-to-confluent-cloud"},"Connecting to Confluent Cloud"),(0,i.kt)("p",null,"If using Confluent Cloud you can use a recipe like this. In this ",(0,i.kt)("inlineCode",{parentName:"p"},"consumer_config.sasl.username")," and ",(0,i.kt)("inlineCode",{parentName:"p"},"consumer_config.sasl.password")," are the API credentials that you get (in the Confluent UI) from your cluster -> Data Integration -> API Keys. ",(0,i.kt)("inlineCode",{parentName:"p"},"schema_registry_config.basic.auth.user.info"),"  has API credentials for Confluent schema registry which you get (in Confluent UI) from Schema Registry -> API credentials."),(0,i.kt)("p",null,"When creating API Key for the cluster ensure that the ACLs associated with the key are set like below. This is required for DataHub to read topic metadata from topics in Confluent Cloud."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"Topic Name = *\nPermission = ALLOW\nOperation = DESCRIBE\nPattern Type = LITERAL\n")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-yml"},'source:\n  type: "kafka"\n  config:\n    connection:\n      bootstrap: "abc-defg.eu-west-1.aws.confluent.cloud:9092"\n      consumer_config:\n        security.protocol: "SASL_SSL"\n        sasl.mechanism: "PLAIN"\n        sasl.username: "CLUSTER_API_KEY_ID"\n        sasl.password: "CLUSTER_API_KEY_SECRET"\n      schema_registry_url: "https://abc-defgh.us-east-2.aws.confluent.cloud"\n      schema_registry_config:\n        basic.auth.user.info: "REGISTRY_API_KEY_ID:REGISTRY_API_KEY_SECRET"\n\nsink:\n  # sink configs\n')),(0,i.kt)("p",null,"If you are trying to add domains to your topics you can use a configuration like below."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-yml"},'source:\n  type: "kafka"\n  config:\n    # ...connection block\n    domain:\n      "urn:li:domain:13ae4d85-d955-49fc-8474-9004c663a810":\n        allow:\n          - ".*"\n      "urn:li:domain:d6ec9868-6736-4b1f-8aa6-fee4c5948f17":\n        deny:\n          - ".*"\n')),(0,i.kt)("p",null,"Note that the ",(0,i.kt)("inlineCode",{parentName:"p"},"domain")," in config above can be either an ",(0,i.kt)("em",{parentName:"p"},"urn")," or a domain ",(0,i.kt)("em",{parentName:"p"},"id")," (i.e. ",(0,i.kt)("inlineCode",{parentName:"p"},"urn:li:domain:13ae4d85-d955-49fc-8474-9004c663a810")," or simply ",(0,i.kt)("inlineCode",{parentName:"p"},"13ae4d85-d955-49fc-8474-9004c663a810"),"). The Domain should exist in your DataHub instance before ingesting data into the Domain. To create a Domain on DataHub, check out the ",(0,i.kt)("a",{parentName:"p",href:"/docs/domains/"},"Domains User Guide"),"."),(0,i.kt)("h2",{id:"config-details"},"Config details"),(0,i.kt)("p",null,"Note that a ",(0,i.kt)("inlineCode",{parentName:"p"},".")," is used to denote nested fields in the YAML recipe."),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:null},"Field"),(0,i.kt)("th",{parentName:"tr",align:null},"Required"),(0,i.kt)("th",{parentName:"tr",align:null},"Default"),(0,i.kt)("th",{parentName:"tr",align:null},"Description"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"conection.bootstrap")),(0,i.kt)("td",{parentName:"tr",align:null}),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},'"localhost:9092"')),(0,i.kt)("td",{parentName:"tr",align:null},"Bootstrap servers.")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"connection.schema_registry_url")),(0,i.kt)("td",{parentName:"tr",align:null}),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},'http://localhost:8081"')),(0,i.kt)("td",{parentName:"tr",align:null},"Schema registry location.")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"connection.schema_registry_config.<option>")),(0,i.kt)("td",{parentName:"tr",align:null}),(0,i.kt)("td",{parentName:"tr",align:null}),(0,i.kt)("td",{parentName:"tr",align:null},"Extra schema registry config. These options will be passed into Kafka's SchemaRegistryClient. See ",(0,i.kt)("a",{parentName:"td",href:"https://docs.confluent.io/platform/current/clients/confluent-kafka-python/html/index.html?#schemaregistryclient"},"https://docs.confluent.io/platform/current/clients/confluent-kafka-python/html/index.html?#schemaregistryclient"),".")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"connection.consumer_config.<option>")),(0,i.kt)("td",{parentName:"tr",align:null}),(0,i.kt)("td",{parentName:"tr",align:null}),(0,i.kt)("td",{parentName:"tr",align:null},"Extra consumer config. These options will be passed into Kafka's DeserializingConsumer. See ",(0,i.kt)("a",{parentName:"td",href:"https://docs.confluent.io/platform/current/clients/confluent-kafka-python/html/index.html#deserializingconsumer"},"https://docs.confluent.io/platform/current/clients/confluent-kafka-python/html/index.html#deserializingconsumer")," and ",(0,i.kt)("a",{parentName:"td",href:"https://github.com/edenhill/librdkafka/blob/master/CONFIGURATION.md"},"https://github.com/edenhill/librdkafka/blob/master/CONFIGURATION.md"),".")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"connection.producer_config.<option>")),(0,i.kt)("td",{parentName:"tr",align:null}),(0,i.kt)("td",{parentName:"tr",align:null}),(0,i.kt)("td",{parentName:"tr",align:null},"Extra producer config. These options will be passed into Kafka's SerializingProducer. See ",(0,i.kt)("a",{parentName:"td",href:"https://docs.confluent.io/platform/current/clients/confluent-kafka-python/html/index.html#serializingproducer"},"https://docs.confluent.io/platform/current/clients/confluent-kafka-python/html/index.html#serializingproducer")," and ",(0,i.kt)("a",{parentName:"td",href:"https://github.com/edenhill/librdkafka/blob/master/CONFIGURATION.md"},"https://github.com/edenhill/librdkafka/blob/master/CONFIGURATION.md"),".")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"topic_patterns.allow")),(0,i.kt)("td",{parentName:"tr",align:null}),(0,i.kt)("td",{parentName:"tr",align:null}),(0,i.kt)("td",{parentName:"tr",align:null},"List of regex patterns for topics to include in ingestion.")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"topic_patterns.deny")),(0,i.kt)("td",{parentName:"tr",align:null}),(0,i.kt)("td",{parentName:"tr",align:null}),(0,i.kt)("td",{parentName:"tr",align:null},"List of regex patterns for topics to exclude from ingestion.")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"topic_patterns.ignoreCase")),(0,i.kt)("td",{parentName:"tr",align:null}),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"True")),(0,i.kt)("td",{parentName:"tr",align:null},"Whether to ignore case sensitivity during pattern matching.")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"domain.domain_urn.allow")),(0,i.kt)("td",{parentName:"tr",align:null}),(0,i.kt)("td",{parentName:"tr",align:null}),(0,i.kt)("td",{parentName:"tr",align:null},"List of regex patterns for topics to set domain_urn domain key. There can be multiple domain key specified.")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"domain.domain_urn.deny")),(0,i.kt)("td",{parentName:"tr",align:null}),(0,i.kt)("td",{parentName:"tr",align:null}),(0,i.kt)("td",{parentName:"tr",align:null},"List of regex patterns for topics to not assign domain_urn. There can be multiple domain key specified.")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"domain.domain_urn.ignoreCase")),(0,i.kt)("td",{parentName:"tr",align:null}),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"True")),(0,i.kt)("td",{parentName:"tr",align:null},"Whether to ignore case sensitivity during pattern matching.There can be multiple domain key specified.")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"platform_instance")),(0,i.kt)("td",{parentName:"tr",align:null}),(0,i.kt)("td",{parentName:"tr",align:null},"None"),(0,i.kt)("td",{parentName:"tr",align:null},"The Platform instance to use while constructing URNs.")))),(0,i.kt)("p",null,"The options in the consumer config and schema registry config are passed to the Kafka DeserializingConsumer and SchemaRegistryClient respectively."),(0,i.kt)("p",null,"For a full example with a number of security options, see this ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/linkedin/datahub/blob/master/metadata-ingestion/examples/recipes/secured_kafka.yml"},"example recipe"),"."),(0,i.kt)("h2",{id:"compatibility"},"Compatibility"),(0,i.kt)("p",null,"Coming soon!"),(0,i.kt)("h2",{id:"questions"},"Questions"),(0,i.kt)("p",null,"If you've got any questions on configuring this source, feel free to ping us on ",(0,i.kt)("a",{parentName:"p",href:"https://slack.datahubproject.io/"},"our Slack"),"!"))}u.isMDXComponent=!0}}]);