<?php

namespace nystudio107\seomatic\craftql\listeners;

use Craft;
use nystudio107\seomatic\craftql\types\SeomaticMetaContainer;

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

        $gqlField = $event->query->addField('seomatic')
            ->lists()
            ->type(SeomaticMetaContainer::class)
            ->resolve(function ($root, $args, $context, $info){

            });

        $gqlField->addStringArgument('uri');
        $gqlField->addIntArgument('siteId');

        // Seomatic::$plugin->metaContainers->SeomaticMetaContainerInterfaceMetaContainers($uri, $siteId, true);
        // Seomatic::$plugin->metaContainers->renderContainersByType(MetaTitleContainer::CONTAINER_TYPE);
        // Seomatic::$plugin->metaContainers->renderContainersByType(MetaTagContainer::CONTAINER_TYPE);
        // Seomatic::$plugin->metaContainers->renderContainersByType(MetaLinkContainer::CONTAINER_TYPE);
        // Seomatic::$plugin->metaContainers->renderContainersByType(MetaScriptContainer::CONTAINER_TYPE);
        // Seomatic::$plugin->metaContainers->renderContainersByType(MetaJsonLdContainer::CONTAINER_TYPE);
    }
}
