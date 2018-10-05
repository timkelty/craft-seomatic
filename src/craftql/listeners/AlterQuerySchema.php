<?php

namespace nystudio107\seomatic\craftql\listeners;

use Craft;
use nystudio107\seomatic\craftql\types\SeomaticMetaTitleContainer;
use nystudio107\seomatic\craftql\types\SeomaticMetaTagContainer;

use nystudio107\seomatic\models\MetaJsonLdContainer;
use nystudio107\seomatic\models\MetaLinkContainer;
use nystudio107\seomatic\models\MetaScriptContainer;
use nystudio107\seomatic\models\MetaTitleContainer;
use nystudio107\seomatic\models\MetaTagContainer;

class AlterQuerySchema
{
    /**
     * Handle the request for the schema
     *
     * @param \markhuot\CraftQL\Events\AlterQuerySchema $event
     * @return void
     */
    function handle(\markhuot\CraftQL\Events\AlterQuerySchema $event) {
        $event->handled = true;

        $gqlField = $event->query->addObjectField('seomaticMeta')
            ->resolve(function ($root, $args, $context, $info){
                xdebug_break();
            });

        $gqlField->addStringArgument('uri');
        $gqlField->addIntArgument('siteId');

        // foreach ([
        //     MetaTitleContainer::CONTAINER_TYPE => SeomaticMetaTitleContainer::class,
        //     MetaTagContainer::CONTAINER_TYPE => SeomaticMetaTagContainer::class,
        // ] as $type => $class) {
        //     $gqlField = $event->query->addField($type)
        //         ->lists()
        //         ->resolve(function ($root, $args, $context, $info){
        //             xdebug_break();
        //         });
        //
        //     $gqlField->addStringArgument('uri');
        //     $gqlField->addIntArgument('siteId');
        // }
    }
}

// Seomatic::$plugin->metaContainers->SeomaticMetaContainerInterfaceMetaContainers($uri, $siteId, true);
// Seomatic::$plugin->metaContainers->renderContainersByType(MetaTitleContainer::CONTAINER_TYPE);
// Seomatic::$plugin->metaContainers->renderContainersByType(MetaTagContainer::CONTAINER_TYPE);
// Seomatic::$plugin->metaContainers->renderContainersByType(MetaLinkContainer::CONTAINER_TYPE);
// Seomatic::$plugin->metaContainers->renderContainersByType(MetaScriptContainer::CONTAINER_TYPE);
// Seomatic::$plugin->metaContainers->renderContainersByType(MetaJsonLdContainer::CONTAINER_TYPE);
