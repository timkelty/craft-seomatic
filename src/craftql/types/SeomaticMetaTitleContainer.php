<?php

namespace nystudio107\seomatic\craftql\types;

use markhuot\CraftQL\Builders\Schema;

class SeomaticMetaTitleContainer extends Schema {

    protected $interfaces = [
        SeomaticMetaContainerInterface::class,
    ];

    // function boot() {
    // }
    //
    // function getName(): string {
    //     return 'SeomaticMetaContainer';
    // }
}
