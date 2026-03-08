<script setup lang="ts">

import {
NavigationMenu,
NavigationMenuItem,
NavigationMenuLink,
NavigationMenuList,
navigationMenuTriggerStyle,
} from '@/components/ui/navigation-menu'

import { scrollToSection } from '@/utils/scrollToSection'

const menuItems = [
{
label: 'Estudios',
href: '#estudios',
onClick: () => scrollToSection('#estudios')
},
{
label: 'Habilidades',
href: '#habilidades',
onClick: () => scrollToSection('#habilidades')
},
{
label: 'Información',
href: '#info',
onClick: () => scrollToSection('#info')
},
]

</script>

<template>

<nav
class="fixed top-6 right-8 z-50 backdrop-blur-md bg-white/60 border border-white/40 shadow-md rounded-xl px-4 py-2"
>

<NavigationMenu>

<NavigationMenuList class="flex gap-2">

<NavigationMenuItem
v-for="item in menuItems"
:key="item.label"
>

<a
:href="item.href"
@click.prevent="item.onClick ? item.onClick() : null"
>

<NavigationMenuLink
:class="[navigationMenuTriggerStyle(),'hover:bg-[#6A5ACD] hover:text-white']"
>

{{ item.label }}

</NavigationMenuLink>

</a>

</NavigationMenuItem>

</NavigationMenuList>

</NavigationMenu>

</nav>

</template>