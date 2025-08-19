# MDX Components Cheat Sheet

Quick reference for custom MDX components in portfolio content.

## 🔧 TileList & Tile

**Purpose**: Display lists as visual tiles instead of bullet points

```mdx
<TileList columns={3}>
  <Tile>**Title Here** Brief description</Tile>
  <Tile>**Another Title** More content</Tile>
</TileList>
```

**Props**:

- `columns`: 1, 2, 3, or 4 (default: 3)

---

## 📊 MetricGrid & Metric

**Purpose**: Showcase statistics and KPIs in grid format

```mdx
<MetricGrid columns={4}>
  <Metric label="Users" value="212+" description="Active daily" />
  <Metric label="Coverage" value="85%" description="Test scenarios" />
  <Metric label="Speed" value="Under 1s" description="Execution time" />
</MetricGrid>
```

**Props**:

- `MetricGrid.columns`: 2, 3, or 4 (default: 4)
- `Metric.label`: Required - metric name
- `Metric.value`: Required - the number/result
- `Metric.description`: Optional - context

---

## 💡 CalloutBox

**Purpose**: Highlight important insights with icons

```mdx
<CalloutBox type="tip" title="Key Insight">
  Your important message here.
</CalloutBox>
```

**Types**: `info` (blue), `tip` (purple), `warning` (amber), `success` (green), `error` (red)

**Props**:

- `type`: Optional (default: "info")
- `title`: Optional heading

---

## ⚡ TechStack

**Purpose**: Display technologies as badges or tiles

```mdx
<!-- Badges (default) -->

<TechStack
  technologies={['React', 'TypeScript', 'Next.js']}
  title="Frontend Stack"
/>

<!-- Tiles -->

<TechStack
  technologies={['Python', 'Docker', 'Kubernetes']}
  title="Backend Stack"
  variant="tiles"
/>
```

**Props**:

- `technologies`: Required array of strings
- `title`: Optional heading (default: "Technologies Used")
- `variant`: "badges" or "tiles" (default: "badges")

---

## 🎨 Styling Tips

### Responsive Columns

- 4 cols → 2 cols (tablet) → 1 col (mobile)
- 3 cols → 2 cols (tablet) → 1 col (mobile)
- 2 cols → 1 col (mobile)

### Content Guidelines

- **Tiles**: Keep content short (1-2 lines max)
- **Metrics**: Use clear, specific labels
- **Callouts**: Single key insight per box
- **Tech**: Group related technologies

---

## ⚠️ Common Issues

### Component Names

```mdx
<!-- ❌ Wrong -->

<tilelist>
<metricgrid>

<!-- ✅ Correct -->

<TileList>
<MetricGrid>
```

### Props Syntax

```mdx
<!-- ❌ Wrong -->

<TileList columns="3">

<!-- ✅ Correct -->

<TileList columns={3}>
```

### Special Characters

```mdx
<!-- ❌ Causes parsing errors -->

Get results in <30 minutes

<!-- ✅ Use words -->

Get results in under 30 minutes
```

---

## 📖 Full Documentation

**[Complete MDX Components Guide](mdx-components-guide.md)** - Detailed examples and advanced usage
