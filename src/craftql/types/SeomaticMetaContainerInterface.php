<?php

namespace nystudio107\seomatic\craftql\types;

use nystudio107\seomatic\models\MetaJsonLdContainer;
use nystudio107\seomatic\models\MetaLinkContainer;
use nystudio107\seomatic\models\MetaScriptContainer;
use nystudio107\seomatic\models\MetaTitleContainer;
use nystudio107\seomatic\models\MetaTagContainer;
use markhuot\CraftQL\Builders\InterfaceBuilder;

class SeomaticMetaContainerInterface extends InterfaceBuilder {

    function boot() {
        $this->addIntField('id')->nonNull();
        //       MetaTitleContainer::CONTAINER_TYPE,
        //       MetaTagContainer::CONTAINER_TYPE,
        //       MetaLinkContainer::CONTAINER_TYPE,
        //       MetaScriptContainer::CONTAINER_TYPE,
        //       MetaJsonLdContainer::CONTAINER_TYPE,
    }

    function getResolveType() {
        return function ($container) {
            return (new \ReflectionClass($container))->getShortName();
        };
    }
}
